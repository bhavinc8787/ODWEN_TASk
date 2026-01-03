# Inventory Management System Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Database
Update the `.env` file with your PostgreSQL connection string:
```
DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"
```

### 3. Generate Prisma Client
```bash
npm run prisma:generate
```

### 4. Run Database Migrations
```bash
npm run prisma:migrate initial_schema
```

### 5. Seed Database (Optional)
```bash
npm run prisma:seed
```

### 6. Start Development Server
```bash
npm run dev
```

The server will run on http://localhost:3001

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

- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Frontend URL for CORS (default: http://localhost:3000)
