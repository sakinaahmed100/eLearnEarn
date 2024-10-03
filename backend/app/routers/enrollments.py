from fastapi import APIRouter, Depends, HTTPException,Query
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.crud.crud import get_user_by_id, create_enrollment,get_user_enrollments
from app.schemas.schemas import Enrollment
from typing import List

router = APIRouter()

@router.get("/user/{user_id}/enrollments", response_model=List[Enrollment])
def read_user_enrollments(user_id: int, db: Session = Depends(get_db)):
    # Verify if the user exists
    user = get_user_by_id(db, user_id)
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Get the enrollments for the user
    enrollments = get_user_enrollments(db, user_id)

    if not enrollments:
        raise HTTPException(status_code=404, detail="No enrollments found for this user")

    return enrollments

@router.post("/enroll/{user_id}")
def enroll_in_course(user_id: int, course_id: int = Query(...), db: Session = Depends(get_db)):
    try:
        enrollment = create_enrollment(db, user_id=user_id, course_id=course_id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"message": "User enrolled successfully", "enrollment": enrollment}

