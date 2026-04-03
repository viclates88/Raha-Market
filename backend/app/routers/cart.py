from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.cart import Cart
from app.models.product import Product
from app.schemas.cart import CartItem

router = APIRouter()

@router.post("/")
def add_to_cart(item: CartItem, db: Session = Depends(get_db)):
    new_item = Cart(user_id=1, product_id=item.product_id)  # nanti pakai JWT user_id
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return {"msg": "Ditambahkan ke keranjang", "cart_id": new_item.cart_id}

@router.get("/")
def get_cart(db: Session = Depends(get_db)):
    cart_items = db.query(Cart).all()
    products = [db.query(Product).get(item.product_id) for item in cart_items]
    return products