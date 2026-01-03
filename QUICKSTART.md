# Quick Start Guide

## 🚀 Getting Started with Inventory Management System

This guide will help you get the application running locally.

## Prerequisites

- **Node.js** v18+ 
- **PostgreSQL** v12+ 
- **npm** or **yarn**

---

## 🎯 Step 1: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

✅ Frontend will be available at: **http://localhost:3000**

---

## 🎯 Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### Configure Database

Edit `.env` file with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Initialize Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Create database and run migrations
npm run prisma:migrate

# (Optional) Seed database with sample data
npm run prisma:seed
```

### Start Backend Server

```bash
npm run dev
```

✅ Backend will be available at: **http://localhost:3001**

---

## 📋 Features

### Dashboard
- View inventory statistics
- Real-time metrics overview
- Product and order summaries

### Products
- Create, read, update, delete products
- Search and filter functionality
- Organize by categories

### Categories
- Manage product categories
- Create category hierarchies
- View products by category

### Orders
- Track customer orders
- Manage order items
- Update order status

### Settings
- Configure API endpoints
- User and account settings
- Company information

---

## 🔌 API Endpoints

### Products
```
GET    /api/products          # Get all products
GET    /api/products/:id      # Get product by ID
POST   /api/products          # Create new product
PUT    /api/products/:id      # Update product
DELETE /api/products/:id      # Delete product
```

### Categories
```
GET    /api/categories        # Get all categories
GET    /api/categories/:id    # Get category by ID
POST   /api/categories        # Create new category
PUT    /api/categories/:id    # Update category
DELETE /api/categories/:id    # Delete category
```

### Orders
```
GET    /api/orders           # Get all orders
GET    /api/orders/:id       # Get order by ID
POST   /api/orders           # Create new order
PUT    /api/orders/:id       # Update order
DELETE /api/orders/:id       # Delete order
```

---

## 📁 Project Structure

```
ODWEN_TASK/
├── frontend/                 # Next.js Frontend
│   ├── app/
│   │   ├── components/       # UI Components
│   │   ├── store/           # Redux store
│   │   ├── api/             # API client & endpoints
│   │   └── (pages)/         # Application pages
│   └── .env.local
│
├── backend/                  # Express Backend
│   ├── src/
│   │   ├── controllers/      # Business logic
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── index.ts         # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── seed.ts          # Database seeder
│   └── .env
│
└── README.md
```

---

## 🛠 Development Commands

### Frontend

```bash
cd frontend

npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production build
npm run lint      # Run ESLint
```

### Backend

```bash
cd backend

npm run dev                    # Start with hot reload (nodemon)
npm run build                 # Compile TypeScript
npm start                     # Run compiled code
npm run prisma:migrate        # Create/run migrations
npm run prisma:studio         # Open Prisma Studio
npm run prisma:seed           # Seed database
```

---

## 🎨 Technology Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Express.js** - Node.js framework
- **TypeScript** - Type safety
- **Prisma** - ORM
- **PostgreSQL** - Database
- **CORS** - Cross-origin support

---

## 🔑 Key Features

✅ Full-stack TypeScript application  
✅ Responsive design with Tailwind CSS  
✅ Global state management with Redux  
✅ RESTful API with proper HTTP methods  
✅ Database ORM with Prisma  
✅ Type-safe database queries  
✅ Error handling middleware  
✅ CORS configuration  
✅ Environment-based configuration  
✅ Database seeding with sample data  

---

## ⚙️ Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

---

## 🐛 Troubleshooting

### Database Connection Error
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Ensure database exists

### Port Already in Use
- Frontend: Change port in `package.json` dev script
- Backend: Change PORT in `.env`

### CORS Errors
- Verify CORS_ORIGIN matches frontend URL
- Check backend is running before frontend

### API Not Responding
- Ensure backend server is running
- Check API_URL in frontend `.env.local`
- Verify no firewall blocking port 3001

---

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📞 Support

For questions or issues:
1. Check the individual README files:
   - `frontend/README.md`
   - `backend/README.md`
2. Review the main `README.md`
3. Check console logs for error messages

---

**Happy coding! 🎉**
