from pydantic import BaseModel

class ReportCreate(BaseModel):
    product_id: int
    reason: str