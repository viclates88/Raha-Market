from pydantic import BaseModel
from typing import List, Optional

class ProductCreate(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    kecamatan: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None

class ProductResponse(BaseModel):
    product_id: int
    title: str
    description: Optional[str]
    price: float
    status: str
    kecamatan: str
    latitude: Optional[float]
    longitude: Optional[float]
    images: List[str]
    distance_km: Optional[float] = None
    avg_rating: Optional[float] = None

    class Config:
        from_attributes = True