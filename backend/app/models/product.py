from sqlalchemy import Column, Integer, String, Float, ForeignKey, JSON, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class Product(Base):
    __tablename__ = "products"
    product_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    title = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)
    status = Column(String, default="tersedia")
    kecamatan = Column(String, nullable=False)
    latitude = Column(Float)
    longitude = Column(Float)
    images = Column(JSON, default=list)
    created_at = Column(DateTime, server_default=func.now())

    user = relationship("User", back_populates="products")