from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    full_name: Optional[str] = None
    phone: Optional[str] = None
    kecamatan: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str