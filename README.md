# Nuvé — AI-Powered Personalized Skincare Platform

Nuvé is an AI-driven personalized skincare and e-commerce web platform. It pairs computer-vision facial skin analysis (scanning parameters such as hydration, elasticity, visible pores, texture, acne, and radiance) with customized skincare regimens, interactive routine builders, product catalog filters, a multi-step checkout pipeline, and order tracking.

---

## 🌟 Architecture & Features

### 1. Frontend (`frontend/`)
* **Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS v4 with custom lavender & purple design system (`#8B5CF6`, `#7C3AED`, `#FAF5FF`)
* **Routing**: React Router DOM v7 (21 routes)
* **Key Modules**:
  * **AI Face Analysis (`/analysis`)**: Live webcam or image upload with 31-zone skin parameter detection, radar chart visualization, and score history.
  * **Custom Routine Builder (`/routine`)**: Dynamic AM & PM regimens with 1-click "Add Entire Routine to Cart".
  * **Product Catalog (`/products`, `/products/:id`)**: Category filtering (Cleanser, Serum, Toner, Moisturizer, Sunscreen, Mask, Treatment), sorting by price & rating, dynamic product details with size selectors.
  * **Cart & Wishlist (`/cart`, `/wishlist`)**: Persistent local storage synced state with instant feedback animations.
  * **Full Checkout Pipeline (`/checkout` → `/payment` → `/confirmation` → `/track-order`)**:
    * Shipping address editor
    * Delivery method selector (Standard Free vs Express ₹149)
    * Multi-option payment gateway (Card, UPI, Net Banking, Wallets)
    * Real-time order generation, confirmation summary, and status timeline.
  * **Skin Knowledge Hub (`/concerns`, `/ingredients`, `/pricing`)**: Diagnostic concerns breakdown and ingredient safety dictionary.
  * **User Profile & Auth (`/login`, `/signup`, `/profile`)**: JWT-ready session management, user credentials update, and live navigation sync.

### 2. Backend (`backend/`)
* **Runtime & Framework**: Node.js + Express 5
* **Database**: MongoDB / Mongoose with high-availability in-memory catalog fallback (`backend/src/data/seedData.js`).
* **Authentication**: JSON Web Tokens (JWT) + Bcryptjs password hashing.
* **API Endpoints**:
  * `GET /api/products` — Retrieve all skincare products (supports `?category=`, `?concern=`, `?sort=`).
  * `GET /api/products/:id` — Retrieve single product details.
  * `POST /api/products` — Create new product.
  * `POST /api/analysis/analyze-face` — Analyze facial scan and generate biomarker scores.
  * `POST /api/auth/register` — User signup.
  * `POST /api/auth/login` — User authentication.
  * `GET /api/auth/me` — Protected profile retrieval.

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* npm or yarn

### 1. Start the Backend API Server
```powershell
cd backend
npm install
npm run dev
```
The backend server will run on `http://localhost:5000`.

### 2. Start the Frontend Development Server
In a separate terminal:
```powershell
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## ⚙️ Environment Configuration

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=supersecretjwtkeyforskinCareproject
```
*(Note: If MongoDB Atlas is offline or IP whitelisting is pending, the backend will automatically and seamlessly serve products from `backend/src/data/seedData.js` without interruptions).*

### Frontend (`frontend/.env`)
```env
VITE_API_BASE=http://localhost:5000/api
```

---

## 📦 Production Build
To create an optimized production build for the frontend:
```powershell
cd frontend
npm run build
```
The output will be generated in `frontend/dist`.

