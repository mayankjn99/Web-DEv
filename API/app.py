from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from user_manager import UserManager

app = FastAPI()
user_manager = UserManager()

class User(BaseModel):
    name: str
    age: int
    email: str

@app.post("/users/{user_id}")
def create_user(user_id: str, user: User):
    if user_manager.get_user(user_id):
        raise HTTPException(status_code=400, detail="User already exists")
    return user_manager.add_user(user_id, user.dict())

@app.get("/users/{user_id}")
def get_user(user_id: str):
    user = user_manager.get_user(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
