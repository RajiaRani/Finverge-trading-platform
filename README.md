<b>Finverge — Zerodha-like Trading Platform (MERN + AWS)</b>

Finverge is a cloud-deployed, commission-free trading platform built with the MERN stack and hosted on AWS. It replicates the core Zerodha experience with real-time APIs, interactive charts, and secure auth.

Monorepo layout: frontend/ (marketing + signup/login), dashboard/ (protected app), backend/ (Node/Express API).

✨ Features

🔐 JWT auth in httpOnly cookies (CSRF-resistant), based on the proven MERN flow

👤 Signup & Login on frontend; successful auth redirects to dashboard

📊 Portfolio views (Holdings, Positions) backed by MongoDB Atlas

🧾 Orders endpoint (demo buy)

🧭 Route guard in dashboard (/verify gate)

📈 Charts with react-chartjs-2 (e.g., Doughnut portfolio split)

☁️ Cloud-ready configs; CORS for local multi-app dev

<b>🏗️ Architecture</b>
Finverge/
├─ backend/            # Express + Mongoose API (port 3002)
│  ├─ models/          # HoldingsModel, PositionModel, OrderModel, UserModel
│  ├─ index.js         # /signup, /login, /verify, /logout, /allHoldings, /allPositions, /newOrder
│  └─ .env             # MONGO_URL, JWT_SECRET, PORT
├─ frontend/           # Marketing + auth pages (port 3000)
│  └─ src/pages/       # Signup.jsx, Login.jsx (redirects to 3001 on s🧪 Tech Stack

Frontend: React, Axios, React Router, React-Toastify

Dashboard: React + route guard (RequireAuth), react-chartjs-2 + chart.js

Backend: Node.js, Express, Mongoose, JWT, cookie-parser, CORS

DB: MongoDB Atlas

Auth pattern: JWT in httpOnly cookie (sameSite=lax) following the fCC MERN guide

<b>🔐 Auth Flow (high-level)</b>

User signs up/logs in on frontend (3000).

Backend (3002) validates & sets token httpOnly cookie.

Frontend hard-redirects to dashboard (3001).

Dashboard guard (RequireAuth) calls POST /verify with credentials.

Valid → render dashboard

Invalid → redirect to login

CORS on backend allows http://localhost:3000 and http://localhost:3001, and all axios calls use { withCredentials: true }.uccess)
├─ dashboard/          # Protected app (port 3001)
│  ├─ src/routes/      # RequireAuth.js (calls /verify with credentials)
│  ├─ src/components/  # WatchList, Summary, Orders, Positions, Funds, Holdings
│  └─ src/lib/         # api.js (axios instance withCredentials)
└─ .gitignore          # ignores .env & build artifacts



<b>Extra links</b>
https://react-chartjs-2.js.org/examples/doughnut-chart 
https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#heading-how-to-handle-the-signup-logic used of auth

