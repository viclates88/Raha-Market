from pydantic import BaseModel

class CartItem(BaseModel):
    product_id: int

class CartResponse(BaseModel):
    cart_id: int
    product_id: int