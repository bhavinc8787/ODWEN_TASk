# Inventory Management System Frontend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
The `.env.local` file is already configured with:
- `NEXT_PUBLIC_API_URL=http://localhost:3001/api`

### 3. Start Development Server
```bash
npm run dev
```

The application will run on http://localhost:3000

## Features

### Pages
- **Dashboard** - Overview of inventory metrics
- **Products** - Manage products (CRUD operations)
- **Categories** - Manage product categories
- **Orders** - Manage customer orders
- **Settings** - Configure application settings

### Components
- **Header** - Company logo, notifications, user profile menu
- **Sidebar** - Navigation with 5 main menu options
- **Responsive Layout** - Mobile-friendly design

### State Management
- Redux Toolkit for global state management
- Slice-based store structure
- Inventory and Auth slices

### Styling
- Tailwind CSS for utility-first styling
- Responsive design
- Dark mode compatible

## Project Structure

```
frontend/
├── app/
│   ├── components/        # Reusable components
│   ├── store/            # Redux store configuration
│   ├── api/              # API client and endpoints
│   └── (pages)/          # Page routes
├── .env.local            # Environment variables
└── package.json
```

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API endpoint (default: http://localhost:3001/api)

## Technology Stack

- Next.js 14 (React Framework)
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React-Redux
- Axios
- React Icons
