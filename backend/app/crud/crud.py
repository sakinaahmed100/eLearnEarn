from sqlalchemy.orm import Session
from app.models.models import User, Enrollment, Course
from app.schemas.schemas import UserCreate
from app.utils import hash_password
from datetime import datetime  # Import datetime

def create_user(db: Session, user: UserCreate):
    hashed_password = hash_password(user.password)
    db_user = User(username=user.username, email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_id(db: Session, user_id: int):  # New function to get user by ID
    return db.query(User).filter(User.id == user_id).first()

def get_courses(db: Session):
    return db.query(Course).all()

def get_user_enrollments(db: Session, user_id: int):
    return db.query(Enrollment).filter(Enrollment.user_id == user_id).all()

def create_enrollment(db: Session, user_id: int, course_id: int):
    # Ensure user and course exist
    user = get_user_by_id(db, user_id)
    course = db.query(Course).filter(Course.id == course_id).first()
    
    if not user:
        raise Exception("User not found")
    if not course:
        raise Exception("Course not found")
    
    db_enrollment = Enrollment(user_id=user_id, course_id=course_id,  enrolled_at=datetime.utcnow())
    db.add(db_enrollment)
    db.commit()
    db.refresh(db_enrollment)
    return db_enrollment
