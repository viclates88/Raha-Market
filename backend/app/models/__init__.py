from .user import User
from .product import Product
from .cart import Cart
from .wishlist import Wishlist
from .rating import Rating
from .report import Report

User.products = relationship("Product", back_populates="user", cascade="all, delete-orphan")