from sqlalchemy.orm import Session
from app.db.database import SessionLocal  # Your session setup
from app.models.models import User  # Your User model

def list_users(session: Session):
    users = session.query(User).all()
    for user in users:
        print(f"Username: {user.username}, Email: {user.email}")

# Get the session and run the function
if __name__ == "__main__":
    session = SessionLocal()
    list_users(session)
