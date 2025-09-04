# Refund Request API

A RESTful API for managing refund requests with user authentication and role-based authorization. Built with Node.js, Express, TypeScript, and Prisma.

## 🚀 Features

- **User Authentication**: JWT-based authentication system
- **Role-Based Authorization**: Support for employee and manager roles
- **Refund Management**: Create, view, and manage refund requests
- **File Upload**: Support for file attachments to refund requests
- **Database Integration**: SQLite database with Prisma ORM
- **TypeScript**: Full TypeScript support for better development experience
- **Input Validation**: Zod schema validation for request data

## 🛠️ Technologies Used

- **Node.js**: Runtime environment
- **Express**: Web framework
- **TypeScript**: Programming language
- **Prisma**: Database ORM
- **SQLite**: Database
- **JWT**: Authentication
- **bcrypt**: Password hashing
- **Zod**: Schema validation
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd refund_api
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma migrate dev
```

4. Generate Prisma client:
```bash
npx prisma generate
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

The server will start on `http://localhost:3333`

## 📊 Database Schema

### Users
- `id`: Unique identifier (UUID)
- `name`: User's full name
- `email`: Unique email address
- `password`: Hashed password
- `role`: User role (employee or manager)
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

### Refunds
- `id`: Unique identifier (UUID)
- `name`: Refund request name/description
- `amount`: Refund amount
- `category`: Refund category (food, transport, accommodation, services, others)
- `filename`: Associated file attachment
- `userId`: Reference to the user who created the request
- `createdAt`: Request creation timestamp
- `updatedAt`: Last update timestamp

## 🔐 API Endpoints

### Authentication

#### POST `/sessions`
Create a new session (login)
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Users

#### POST `/users`
Create a new user account
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Refunds (Protected Routes)

#### POST `/refunds`
Create a new refund request (Employee only)
```json
{
  "name": "Lunch expense",
  "amount": 25.50,
  "category": "food"
}
```

#### GET `/refunds`
List all refund requests (Manager only)

#### GET `/refunds/:id`
Get a specific refund request (Employee/Manager)

### File Upload (Protected Routes)

#### POST `/uploads`
Upload a file attachment

## 🔒 Authorization

The API uses role-based authorization:

- **Employee**: Can create refund requests and view their own requests
- **Manager**: Can view all refund requests and manage the system

## 📁 Project Structure

```
src/
├── configs/          # Configuration files
├── controllers/      # Request handlers
├── database/         # Database related files
├── middlewares/      # Custom middlewares
├── providers/        # Service providers
├── routes/           # API routes
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── app.ts           # Express app configuration
└── server.ts        # Server entry point

prisma/
├── schema.prisma    # Database schema
└── migrations/      # Database migrations
```

## 🔧 Development

### Database Commands

```bash
# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Generate Prisma client
npx prisma generate
```
