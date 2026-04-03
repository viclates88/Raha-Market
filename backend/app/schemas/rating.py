from pydantic import BaseModel
from typing import Optional

class RatingCreate(BaseModel):
    product_id: int
    stars: float
    comment: Optional[str] = None