from sqlalchemy.orm import Session
from app.db.database import SessionLocal,engine  # Your session setup
from app.models.models import User  # Your User model
from app.models.models import Course
from app.models.models import Base

def list_users(session: Session):
    users = session.query(User).all()
    for user in users:
        print(f"Username: {user.username}, Email: {user.email}")
        
def list_user(session: Session):
    users = session.query(Course).all()
    for course in users:
        print(f"Title: {course.title}, Duration: {course.duration}")

# Get the session and run the function
if __name__ == "__main__":
    session = SessionLocal()
    list_users(session)
    list_user(session)


# Base.metadata.create_all(bind=engine)

# # Create a new session
# db: Session = SessionLocal()

# # Create a new course object
# new_course = Course(
#     title="Javascript for Beginners",
#     description="Learn the basics of ES6 for web development",
#     difficulty="Intermediate",
#     duration="150 hours"
# )

# # Add the new course to the session
# db.add(new_course)

# # Commit the session to save the course to the database
# db.commit()

# # Optional: Refresh the object so you get the auto-generated ID
# db.refresh(new_course)

# # Print the ID of the newly created course (to confirm)
# print(f"Course added with ID: {new_course.id}")

# # Close the session
# db.close()