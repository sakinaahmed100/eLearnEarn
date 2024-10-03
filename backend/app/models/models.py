from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from app.db.database import Base
from sqlalchemy.sql import func
from datetime import datetime
from typing import Optional

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    
    # Define the relationship to Enrollment
    enrollments = relationship("Enrollment", back_populates="user")

class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    difficulty = Column(String)
    duration = Column(String)
    
    # Define the relationship to Enrollment
    enrollments = relationship("Enrollment", back_populates="course")



class Enrollment(Base):
    __tablename__ = "enrollments"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    course_id = Column(Integer, ForeignKey("courses.id"))
    progress_percentage = Column(Integer, default=0)
    enrolled_at: Column[Optional[datetime]] = Column(DateTime, default=func.now())
    user = relationship("User", back_populates="enrollments")
    course = relationship("Course", back_populates="enrollments")

