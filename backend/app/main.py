from fastapi import FastAPI
from app.config import app
from app.database import Base, engine
from app.routers import auth, products, cart, wishlist, rating_report

Base.metadata.create_all(bind=engine)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(cart.router, prefix="/cart", tags=["Cart"])
app.include_router(wishlist.router, prefix="/wishlist", tags=["Wishlist"])
app.include_router(rating_report.router, prefix="/ratings", tags=["Rating & Report"])

@app.get("/")
def root():
    return {"message": "🚀 Raha Market API is running!"}
