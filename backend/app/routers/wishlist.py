from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.wishlist import Wishlist
from app.models.product import Product
from app.schemas.wishlist import WishlistItem

router = APIRouter()

@router.post("/")
def add_to_wishlist(item: WishlistItem, db: Session = Depends(get_db)):
    new_item = Wishlist(user_id=1, product_id=item.product_id)
    db.add(new_item)
    db.commit()
    return {"msg": "Ditambahkan ke wishlist"}

@router.get("/")
def get_wishlist(db: Session = Depends(get_db)):
    items = db.query(Wishlist).all()
    products = [db.query(Product).get(item.product_id) for item in items]
    return products