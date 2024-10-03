from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class CourseBase(BaseModel):
    title: str
    description: Optional[str] = None
    difficulty: Optional[str] = None
    duration: Optional[str] = None

class Course(CourseBase):
    id: int

    class Config:
        orm_mode = True

class EnrollmentBase(BaseModel):
    user_id: int
    course_id: int
    progress_percentage: Optional[int] = 0

class EnrollmentCreate(EnrollmentBase):
    pass

class Enrollment(EnrollmentBase):
    id: int
    enrolled_at: datetime  # Change this back to datetime

    class Config:
        orm_mode = True

    def __init__(self, **data):
        super().__init__(**data)
        # Format enrolled_at as a string in ISO format
        self.enrolled_at = self.enrolled_at.isoformat() if isinstance(self.enrolled_at, datetime) else self.enrolled_at

