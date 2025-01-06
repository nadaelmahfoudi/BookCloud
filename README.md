# BookCloud

BookCloud is a modern application designed for a local library to enhance its digital services. The platform enables users to securely sign up, search and borrow books, and receive notifications for loan reminders and returns. Built with a microservices architecture and leveraging AWS for scalability, BookCloud is a robust solution for modern library management.

---

## 📋 Features

1. **Authentication Service**
   - Secure user registration and login using AWS Cognito.
   - Retrieve user details with JWT-based authentication.

2. **Book Management Service**
   - CRUD operations for books (admin only).
   - Search books by title, author.
   - Borrow and return books (authenticated users).

3. **Frontend (BookCloud)**
   - Intuitive interface for users to interact with backend services.
   - Admin dashboard for managing books.
   - User dashboard for browsing, borrowing, and returning books.

4. **Infrastructure & DevOps**
   - Deployed using AWS EC2, API Gateway, S3, and CloudFront.
   - CI/CD pipelines for automated deployment.

---

## 🛠️ Tech Stack

### Backend
- **Framework**: NestJS
- **Databases**: MongoDB/DynamoDB
- **AWS Services**: Cognito, Lambda, ECS, API Gateway

### Frontend
- **Framework**: React.js
- **Deployment**: AWS S3 + CloudFront

### DevOps
- **Secrets Management**: AWS Secrets Manager
- **CI/CD**: AWS CodePipeline, GitHub Actions

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js
- AWS CLI
- MongoDB/DynamoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/bookcloud.git  
   cd bookcloud  
2. Install dependencies:
   ```bash
   npm install
## 📖 API Documentation

### Authentication Service

- **POST** `/auth/signup`: Register a new user.
- **POST** `/auth/login`: Log in and get a JWT.
- **GET** `/auth/me`: Fetch user info (JWT required).

### Book Service

- **GET** `/books`: List all books.
- **GET** `/books/:S`: Get details of a book.
- **POST** `/books`: Add a new book (admin only).
- **PUT** `/books/:bookId`: Update a book (admin only).
- **DELETE** `/books/:S`: Delete a book (admin only).
- **POST** `/books/:id/borrow`: Borrow a book (authenticated user).
- **POST** `/books/:id/return`: Return a book (authenticated user).


## URLs for AWS:
  
Backend URL (AWS)
Once deployed, your backend will be available at the following URL:

Backend API URL: http://34.205.159.176:3000/books

Frontend URL (AWS)
Once deployed, your frontend will be available at the following URL:

Frontend URL: http://bookcloudreact.s3-website-us-east-1.amazonaws.com/


## Set up environment variables in `.env` file:
```env
AWS_ACCESS_KEY_ID=your-access-key  
AWS_SECRET_ACCESS_KEY=your-secret-key  
REGION=your-region







