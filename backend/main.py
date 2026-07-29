from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId

from models import Student
from database import student_collection

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Convert Mongo document to JSON
def student_helper(student):
    return {
        "id": str(student["_id"]),
        "name": student["name"],
        "age": student["age"],
        "course": student["course"],
        "email": student["email"],
    }


# Home Route
@app.get("/")
async def home():
    return {"message": "Student Management API"}


# Get All Students
@app.get("/students")
async def get_students():
    students = []

    async for student in student_collection.find():
        students.append(student_helper(student))

    return students


# Get Student By ID
@app.get("/students/{id}")
async def get_student(id: str):

    student = await student_collection.find_one({"_id": ObjectId(id)})

    if student:
        return student_helper(student)

    raise HTTPException(status_code=404, detail="Student not found")


# Add Student
@app.post("/students")
async def add_student(student: Student):

    result = await student_collection.insert_one(student.dict())

    new_student = await student_collection.find_one(
        {"_id": result.inserted_id}
    )

    return student_helper(new_student)


# Update Student
@app.put("/students/{id}")
async def update_student(id: str, student: Student):

    result = await student_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": student.dict()}
    )

    if result.modified_count == 1:

        updated_student = await student_collection.find_one(
            {"_id": ObjectId(id)}
        )

        return student_helper(updated_student)

    raise HTTPException(status_code=404, detail="Student not found")


# Delete Student
@app.delete("/students/{id}")
async def delete_student(id: str):

    result = await student_collection.delete_one(
        {"_id": ObjectId(id)}
    )

    if result.deleted_count == 1:
        return {"message": "Student deleted successfully"}

    raise HTTPException(status_code=404, detail="Student not found")