# app/models/rating.py
from sqlalchemy import Column, Integer, ForeignKey, Float, String, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Rating(Base):
    __tablename__ = "ratings"
    rating_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    product_id = Column(Integer, ForeignKey("products.product_id"))
    stars = Column(Float, nullable=False)
    comment = Column(String)
    created_at = Column(DateTime, server_default=func.now())