from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.crud.crud import get_courses
from app.schemas.schemas import Course
from typing import List

router = APIRouter()

@router.get("/courses", response_model=List[Course])
def read_courses(db: Session = Depends(get_db)):
    return get_courses(db)