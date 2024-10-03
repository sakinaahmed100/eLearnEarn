from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.schemas import UserCreate, UserLogin
from app.crud.crud import create_user, get_user_by_email
from app.db.database import get_db
from app.utils import verify_password
from app.utils import create_access_token

router = APIRouter()

@router.post("/api/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    created_user = create_user(db, user)
    return {"userId": created_user.id, "username": created_user.username, "email": created_user.email}


@router.post("/api/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, user.email)
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Generate a JWT token
    token = create_access_token({"sub": db_user.email})
    print(token)
    return {"access_token": token, "token_type": "bearer", "userId": db_user.id}

