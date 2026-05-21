# 🍲 Foodie - Recipe Sharing Platform

A full-stack recipe sharing application where users can discover, create, and manage their favorite recipes with beautiful image uploads and community engagement.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎯 Core Features
- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Recipe Management**: Create, read, update, and delete recipes
- **Image Upload**: Cloud-based image uploads using Cloudinary
- **Search & Discovery**: Find recipes by title, description, or ingredients
- **User Profiles**: Manage personal recipe collections
- **Responsive UI**: Modern, mobile-friendly interface with Tailwind CSS
- **Real-time Validation**: Schema validation using Yup

### 🔒 Security Features
- Password encryption with bcryptjs
- JWT token-based authentication
- CORS protection
- Helmet security headers
- File upload size limits (50MB)
- Input validation on both client and server

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) + Passport.js
- **File Upload**: Cloudinary + express-fileupload
- **Image Processing**: Sharp
- **Validation**: Yup schema validation
- **Security**: bcryptjs, Helmet, CORS
- **Development**: Nodemon, ESLint, Prettier

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **State Management**: React Context API + SWR
- **UI Components**: Custom components with React Icons
- **Notifications**: React Hot Toast
- **Development**: ESLint

## 📁 Project Structure

```
Foodie/
├── backend/                          # Express.js backend server
│   ├── src/
│   │   ├── index.ts                 # Server entry point
│   │   ├── controllers/             # Route controllers
│   │   │   ├── auth.ts
│   │   │   └── recipe.ts
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── user.ts
│   │   │   └── recipe.ts
│   │   ├── routes/                  # API routes
│   │   │   ├── auth.ts
│   │   │   └── recipe.ts
│   │   ├── middlewares/             # Custom middleware
│   │   │   └── validate.ts
│   │   ├── config/                  # Configuration files
│   │   │   ├── passport.ts
│   │   │   └── index.ts
│   │   ├── utils/                   # Utility functions
│   │   │   ├── asyncHandler.ts
│   │   │   └── image.ts
│   │   ├── cloudinary/              # Cloudinary config
│   │   ├── constants/               # App constants
│   │   ├── schema-validations/      # Yup schemas
│   │   └── @types/                  # TypeScript types
│   ├── build/                        # Compiled JavaScript
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   ├── eslint.config.mjs
│   └── .gitignore
│
├── frontend/                         # React Vite frontend
│   ├── src/
│   │   ├── main.tsx                 # React entry point
│   │   ├── App.tsx                  # Main App component
│   │   ├── pages/
│   │   │   ├── Dashboard/           # Dashboard routes
│   │   │   │   ├── home.tsx
│   │   │   │   ├── add-recipe.tsx
│   │   │   │   ├── my-recipes.tsx
│   │   │   │   └── more.tsx
│   │   │   ├── Landing/             # Landing page
│   │   │   └── Error/               # Error page
│   │   ├── components/              # Reusable components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   ├── card.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── search-box.tsx
│   │   │   └── loaders/
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── auth.ts
│   │   │   └── recipe.ts
│   │   ├── context/                 # React Context
│   │   │   └── auth-context.tsx
│   │   ├── layouts/
│   │   │   └── dashboard.tsx
│   │   ├── config/
│   │   │   └── axios.ts
│   │   ├── utils/
│   │   │   ├── validate-email.ts
│   │   │   └── validate-image.ts
│   │   ├── @types/                  # TypeScript types
│   │   ├── assets/
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.cjs
│   ├── eslint.config.js
│   └── .gitignore
│
└── README.md                         # This file
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas cloud database)
- **Git**

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Foodie.git
cd Foodie
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
# or
yarn install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
# or
yarn install
```

## 🔐 Environment Variables

### Backend (.env)
Create a `.env` file in the `backend/` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/foodie

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# CORS
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
# The server will start on http://localhost:5000
```

**Terminal 2 - Frontend Dev Server:**
```bash
cd frontend
npm run dev
# The app will start on http://localhost:5173
```

### Production Build

**Build Backend:**
```bash
cd backend
npm run build
npm start
```

**Build Frontend:**
```bash
cd frontend
npm run build
# Output will be in the dist/ directory
```

## 📚 API Endpoints

### Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/logout` | Logout user |
| GET | `/auth/profile` | Get user profile |

### Recipe Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/recipe` | Get all recipes |
| GET | `/recipe/:id` | Get recipe by ID |
| POST | `/recipe/create` | Create a new recipe |
| PUT | `/recipe/:id` | Update recipe |
| DELETE | `/recipe/:id` | Delete recipe |
| GET | `/recipe/user/:userId` | Get user's recipes |

## 🛠 Development

### Code Style
This project uses ESLint and Prettier for code formatting:

```bash
# Backend linting
cd backend
npm run lint

# Format code
npm run format
```

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗 Building for Production

### Backend Build
```bash
cd backend
npm run build
# Creates optimized JavaScript in build/ directory
```

### Frontend Build
```bash
cd frontend
npm run build
# Creates optimized bundle in dist/ directory
```

### Deploy
1. Set production environment variables
2. Build both frontend and backend
3. Deploy backend to a Node.js hosting service (Heroku, Railway, Render, etc.)
4. Deploy frontend to a static hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Guidelines
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep messages concise and under 50 characters when possible

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email foodie@example.com or open an issue on GitHub.

## 🎉 Acknowledgments

- MongoDB and Mongoose for database management
- Cloudinary for image hosting
- React community for amazing tools and libraries
- Express.js for the robust backend framework

---

**Happy Cooking! 🍳** 

Made with ❤️ by Foodie Team