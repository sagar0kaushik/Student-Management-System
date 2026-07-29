# 🎓 Student Management System

A full-stack Student Management System built with **FastAPI**, **React**, and **MongoDB Atlas**.

---

##  Features

- Add Student
- View Students
- Update Student
- Delete Student
- Search Students
- Responsive Dashboard
- REST API
- MongoDB Atlas Integration
- FastAPI Backend
- React Frontend

---

## 🛠 Tech Stack

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- FastAPI
- Pydantic
- Motor

### Database

- MongoDB Atlas

---

##  Project Structure

```
Student-Management-System
│
├── backend
│
├── frontend
│
├── README.md
│
└── .gitignore
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Student-Management-System.git
```

Backend

```bash
cd backend

python -m venv venv

pip install -r requirements.txt

uvicorn main:app --reload
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|----------|-------------|--------------|
| GET | /students | Get all students |
| POST | /students | Add student |
| PUT | /students/{id} | Update student |
| DELETE | /students/{id} | Delete student |

---

## Future Improvements

- JWT Authentication
- Pagination
- Export to Excel
- Profile Pictures
- Dashboard Analytics

---

## Author

Sagar Kaushik

## Screenshots

![Dashboard](screenshots/dashboard.png)
![AddStudents](screenshot/AddStudents.png)