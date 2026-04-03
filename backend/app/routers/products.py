from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductResponse
from app.utils.haversine import haversine
import shutil
from app.config import UPLOAD_DIR
from typing import List, Optional

router = APIRouter()

@router.post("/")
async def create_product(
    title: str, price: float, kecamatan: str,
    description: Optional[str] = None,
    latitude: Optional[float] = None,
    longitude: Optional[float] = None,
    files: List[UploadFile] = File(...),
    db: Session = Depends(get_db)
):
    if len(files) > 5:
        raise HTTPException(400, "Maksimal 5 foto")
    
    image_paths = []
    for file in files:
        path = f"{UPLOAD_DIR}/{file.filename}"
        with open(path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        image_paths.append(f"/static/uploads/{file.filename}")

    new_product = Product(
        title=title, description=description, price=price,
        kecamatan=kecamatan, latitude=latitude, longitude=longitude,
        images=image_paths
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

@router.get("/nearby")
def get_nearby(lat: float, lon: float, db: Session = Depends(get_db)):
    products = db.query(Product).all()
    result = []
    for p in products:
        if p.latitude and p.longitude:
            dist = haversine(lat, lon, p.latitude, p.longitude)
            result.append({**p.__dict__, "distance_km": round(dist, 2)})
    return sorted(result, key=lambda x: x.get("distance_km", 999))