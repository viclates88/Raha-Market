from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.rating import Rating
from app.models.report import Report
from app.schemas.rating import RatingCreate
from app.schemas.report import ReportCreate

router = APIRouter()

@router.post("/rate")
def rate_product(rating: RatingCreate, db: Session = Depends(get_db)):
    new_rating = Rating(user_id=1, **rating.dict())
    db.add(new_rating)
    db.commit()
    return {"msg": "Rating berhasil ditambahkan"}

@router.post("/report")
def report_product(report: ReportCreate, db: Session = Depends(get_db)):
    new_report = Report(user_id=1, **report.dict())
    db.add(new_report)
    db.commit()
    return {"msg": "Laporan dikirim"}