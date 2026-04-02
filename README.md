# Finance Data Processing and Access Control Backend

##  Overview

This project is a backend system for a finance dashboard that manages financial records, users, roles, and access control.

It is designed to demonstrate backend architecture, API design, role-based access control, and data processing using a clean and maintainable approach.



##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod (Validation)
* JWT (Authentication)
* Cookie-based authentication



##  Authentication & Authorization

### Authentication

* Implemented using JWT tokens
* Tokens are stored in HTTP-only cookies

### Authorization (RBAC)

The system supports three roles:

* **Viewer**

  * Can view records
* **Analyst**

  * Can view records
  * Can access dashboard analytics
* **Admin**

  * Full access (CRUD + user management)



##  User Management

* Register user (default role: viewer)
* Login user
* Update user role (admin only)
* Activate / deactivate user



##  Financial Records

Each record contains:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

### Features:

* Create record (Admin only)
* Get all records (with filtering)
* Update record (Admin only)
* Delete record (Soft delete)

### Filtering:

* By type
* By category
* By date range



##  Dashboard APIs

Provides aggregated data for dashboard:

* Total income
* Total expense
* Net balance
* Category-wise totals
* Recent transactions
* Monthly trends



##  Access Control Logic

* Protected routes require authentication
* Role-based middleware restricts access
* Only admins can modify data
* Analysts can access analytics
* Viewers have limited access



##  Validation & Error Handling

* Zod is used for input validation
* Proper error responses are returned
* Invalid inputs are handled gracefully



##  Data Persistence

* MongoDB is used as the database
* Mongoose is used for schema modeling



##  Setup Instructions

1. Clone the repository
  ``` 
  https://github.com/Shubhamkahar196/Finance-backend-.git
  ```
2. Install dependencies

```
npm install
```

3. Create `.env` file

```
PORT=8000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

4. Run server

```
npm run dev
```

5. Seed admin

```
npm run seed:admin
```

---

##  API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/me

### Users (Admin)

* GET /api/users
* PUT /api/users/:id/role
* PUT /api/users/:id/status

### Records

* POST /api/records (Admin)
* GET /api/records
* GET /api/records/:id
* PUT /api/records/:id (Admin)
* DELETE /api/records/:id (Admin)

### Dashboard

* GET /api/dashboard/summary
* GET /api/dashboard/category
* GET /api/dashboard/recent
* GET /api/dashboard/trends

---

##  Design Decisions

* Role-based access control implemented using middleware
* Soft delete used for data safety
* Aggregation pipelines used for dashboard analytics
* Validation handled using Zod for clean and reusable schemas

---

##  Notes

* Registration does not allow role selection for security
* Admin is created via seed script
* All protected routes require authentication

---

##  Conclusion

This project demonstrates a structured backend system with proper authentication, authorization, data handling, and scalable design suitable for real-world applications.
