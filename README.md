#  Finance Data Processing and Access Control Backend

##  Overview

This project is a backend system for a finance dashboard that manages financial records, users, roles, and access control.

It demonstrates backend architecture, API design, role-based access control (RBAC), and data processing using a clean and maintainable approach.

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod (Validation)
* JWT (Authentication)
* Cookie-based Authentication
* Docker

---

##  Project Structure

```
Finance-Backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── record.controller.js
│   │   └── dashboard.controller.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── record.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── record.routes.js
│   │   └── dashboard.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── validators/
│   │   ├── auth.validator.js
│   │   └── record.validator.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   └── utils/
│   │   └── generateToken.js
│    ├── index.js
│
├── scripts/
│   └── seedAdmin.js
│
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```

---

##  Authentication & Authorization

### Authentication

* Implemented using JWT tokens
* Tokens are stored in HTTP-only cookies

### Authorization (RBAC)

#### Roles:

* **Viewer**

  * Can view records

* **Analyst**

  * Can view records
  * Can access dashboard analytics

* **Admin**

  * Full access (CRUD + user management)

---

##  User Management

* Register user (default role: viewer)
* Login user
* Update user role (admin only)
* Activate / deactivate user

---

##  Financial Records

Each record contains:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Features

* Create record (Admin only)
* Get all records (with filtering)
* Update record (Admin only)
* Delete record (Soft delete)

### Filtering

* By type
* By category
* By date range

---

##  Dashboard APIs

Provides aggregated data:

* Total income
* Total expense
* Net balance
* Category-wise totals
* Recent transactions
* Monthly trends

---

##  Access Control Logic

* Protected routes require authentication
* Role-based middleware restricts access
* Only admins can modify data
* Analysts can access analytics
* Viewers have limited access

---

## ✅ Validation & Error Handling

* Zod is used for validation
* Proper error responses
* Handles invalid inputs gracefully

---

## 💾 Data Persistence

* MongoDB database
* Mongoose ODM

---

## ⚙️ Setup Instructions

###  Clone Repository

```
git clone https://github.com/Shubhamkahar196/Finance-backend-.git
cd Finance-backend-
```

---

###  Install Dependencies

```
npm install
```

---

###  Create `.env` File

```
PORT=8000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=Admin@123
```

---

###  Run Server

```
npm run dev
```

---

### Seed Admin

```
npm run seed:admin
```

---

##  Docker Setup

### Build Image

```
docker build -t finance-backend .
```

---

### Run Container

```
docker run -p 8000:8000 --env-file .env finance-backend
```

---

### Access API

```
http://localhost:8000
```

---

##  API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/me`

---

### Users (Admin)

* GET `/api/users`
* PUT `/api/users/:id/role`
* PUT `/api/users/:id/status`

---

### Records

* POST `/api/records` (Admin)
* GET `/api/records`
* GET `/api/records/:id`
* PUT `/api/records/:id` (Admin)
* DELETE `/api/records/:id` (Admin)

---

### Dashboard

* GET `/api/dashboard/summary`
* GET `/api/dashboard/category`
* GET `/api/dashboard/recent`
* GET `/api/dashboard/trends`

---

##  Design Decisions

* Role-based access control using middleware
* Soft delete for data safety
* Aggregation pipelines for analytics
* Zod for validation

---

##  Notes

* Role cannot be selected during registration
* Admin is created using seed script
* All protected routes require authentication

---

##  Conclusion

This project demonstrates a scalable backend system with proper authentication, authorization, validation, and data processing suitable for real-world finance applications.
