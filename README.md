# Inventory Management System

A professional inventory management system with modern frontend and robust backend. Built with Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Express.js, and PostgreSQL.

## Project Structure

```
ODWEN_TASK/
├── frontend/          # Next.js + TypeScript + Tailwind CSS
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── store/
│   │   │   ├── store.ts
│   │   │   ├── hooks.ts
│   │   │   └── slices/
│   │   │       ├── inventorySlice.ts
│   │   │       └── authSlice.ts
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   └── endpoints.ts
│   │   ├── (pages)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── orders/
│   │   │   └── settings/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   └── globals.css
│   ├── .env.local
│   └── package.json
│
└── backend/           # Express + TypeScript + Prisma ORM + PostgreSQL
    ├── src/
    │   ├── controllers/
    │   │   ├── productController.ts
    │   │   ├── categoryController.ts
    │   │   └── orderController.ts
    │   ├── routes/
    │   │   ├── productRoutes.ts
    │   │   ├── categoryRoutes.ts
    │   │   └── orderRoutes.ts
    │   ├── middleware/
    │   │   └── errorHandler.ts
    │   ├── types/
    │   └── index.ts
    ├── prisma/
    │   ├── schema.prisma
    │   └── seed.ts
    ├── .env
    ├── tsconfig.json
    ├── package.json
    └── README.md
```

## Features

### Frontend Features
- ✅ **Responsive Dashboard** - Real-time inventory overview
- ✅ **Product Management** - CRUD operations for products
- ✅ **Category Management** - Organize products by categories
- ✅ **Order Management** - Track customer orders
- ✅ **Settings Page** - Configure API and system settings
- ✅ **Professional Header** - Company logo, notifications, user profile
- ✅ **Sidebar Navigation** - 5 main navigation options
- ✅ **Redux State Management** - Global state with Redux Toolkit
- ✅ **Tailwind CSS** - Modern, responsive design
- ✅ **TypeScript** - Type-safe development
- ✅ **Global API Setup** - Centralized API client with interceptors

### Backend Features
- ✅ **RESTful API** - Complete REST API with proper HTTP methods
- ✅ **Product API** - Full CRUD for products
- ✅ **Category API** - Full CRUD for categories
- ✅ **Order API** - Full CRUD for orders with items
- ✅ **Prisma ORM** - Type-safe database queries
- ✅ **PostgreSQL** - Robust relational database
- ✅ **Error Handling** - Comprehensive error handling middleware
- ✅ **CORS Support** - Configured for frontend communication
- ✅ **Environment Variables** - Secure configuration
- ✅ **Database Seeding** - Sample data for testing
- ✅ **TypeScript** - Full type safety

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **State Management**: Redux Toolkit + React-Redux
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: React Icons

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Server Runtime**: Node.js
- **Development**: Nodemon, ts-node

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: http://localhost:3000

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Update .env file with your PostgreSQL connection string
# DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"

# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Seed database with sample data (optional)
npm run prisma:seed

# Start development server
npm run dev
```

Backend will run on: http://localhost:3001

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create new category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order

## Environment Variables

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

## Database Schema

### Products Table
- id (Primary Key)
- name
- description
- price
- quantity
- categoryId (Foreign Key)
- timestamps

### Categories Table
- id (Primary Key)
- name (Unique)
- description
- timestamps

### Orders Table
- id (Primary Key)
- orderNumber (Unique)
- customerName
- customerEmail
- status
- totalAmount
- timestamps

### OrderItems Table
- id (Primary Key)
- orderId (Foreign Key)
- productId (Foreign Key)
- quantity
- price
- timestamp

### Users Table
- id (Primary Key)
- name
- email (Unique)
- password
- role
- timestamps

## Development Commands

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

### Backend
```bash
npm run dev                 # Start development server with nodemon
npm run build              # Compile TypeScript to JavaScript
npm start                  # Run compiled JavaScript
npm run prisma:generate    # Generate Prisma Client
npm run prisma:migrate     # Create and run database migration
npm run prisma:studio      # Open Prisma Studio
npm run prisma:seed        # Seed database with sample data
```

## Project Highlights

### Frontend Architecture
- **Component-based** - Reusable React components
- **Redux Store** - Centralized state management
- **API Client** - Axios configured with interceptors
- **Responsive** - Mobile-first Tailwind CSS design
- **Type-safe** - Full TypeScript coverage

### Backend Architecture
- **MVC Pattern** - Controllers, Routes, and Models separation
- **Middleware** - Error handling and CORS middleware
- **Database** - Prisma ORM with PostgreSQL
- **API Routes** - RESTful routing with proper HTTP methods
- **Type Safety** - TypeScript throughout

## Styling

The frontend uses Tailwind CSS with a professional color scheme:
- Primary: Blue (#0066CC)
- Secondary: Purple (#6B21A8)
- Success: Green (#16A34A)
- Warning: Orange (#EA580C)
- Error: Red (#DC2626)

## Security Features

- CORS protection enabled
- Environment variables for sensitive data
- Type-safe queries with Prisma
- Error messages sanitized
- Database connection pooling

## Future Enhancements

- [ ] Authentication & Authorization
- [ ] Advanced search and filtering
- [ ] Data export (CSV/PDF)
- [ ] Real-time notifications
- [ ] Admin dashboard analytics
- [ ] Inventory alerts
- [ ] Email notifications
- [ ] Mobile app (React Native)

## Support

For issues or questions, please refer to the individual README files in each folder:
- Frontend: [frontend/README.md](frontend/README.md)
- Backend: [backend/README.md](backend/README.md)

## License

ISC
