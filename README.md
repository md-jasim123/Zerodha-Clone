<div align="center">

# 📈 Zerodha Clone

### A full-stack trading platform clone built with the MERN stack

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/JWT-Auth-black?style=flat-square&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/MUI-v5-007FFF?style=flat-square&logo=mui" />
  <img src="https://img.shields.io/badge/Chart.js-4.x-FF6384?style=flat-square&logo=chartdotjs" />
  <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat-square&logo=axios" />
</p>

</div>

---

## 📌 Overview

This project is a comprehensive clone of the [Zerodha](https://zerodha.com) brokerage platform, designed for learning full-stack development. It is split into **three independent applications** that work together:

| App | Path | Purpose |
|---|---|---|
| 🖥️ **Frontend** | `frontend/` | Public-facing landing & marketing site |
| 📊 **Dashboard** | `dashboard/` | Post-login trading UI |
| ⚙️ **Backend** | `backend/` | REST API, authentication & database layer |

---

## ✨ Features

- 🔐 &nbsp;**User Authentication** — Secure signup & login with JWT and bcrypt
- 📊 &nbsp;**Holdings Management** — View and track long-term stock investments
- 🛒 &nbsp;**Order Execution** — Place and manage buy/sell orders
- 📉 &nbsp;**Positions Tracking** — Monitor active intraday trades and live P&L
- 🍩 &nbsp;**Portfolio Charts** — Doughnut and vertical bar charts via Chart.js
- 👁️ &nbsp;**Watchlist** — Browse market instruments from the dashboard
- 🔗 &nbsp;**RESTful API** — Validated endpoints using Express Validator
- 🛡️ &nbsp;**Error Handling** — Centralised async error handling and custom API errors

---

## 🛠️ Tech Stack

<details>
<summary><b>⚙️ Backend</b></summary>

| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server & routing (ES Modules) |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Token (JWT) | Authentication |
| bcrypt | Password hashing |
| express-validator | Request validation |
| dotenv | Environment configuration |
| Nodemon | Development auto-reload |

</details>

<details>
<summary><b>🌐 Frontend (Landing Page)</b></summary>

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM v6 | Client-side routing |

</details>

<details>
<summary><b>📊 Dashboard</b></summary>

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM v6 | Client-side routing |
| Material UI (MUI v5) | Component library |
| Chart.js + react-chartjs-2 | Data visualisation |
| Axios | HTTP client |

</details>

---

## 🗂️ Project Structure

```
Zerodha-Clone/
│
├── backend/                    # Node.js + Express REST API
│   ├── src/
│   │   ├── config/             # DB connection & env config
│   │   ├── controllers/        # Route handler logic
│   │   ├── middleware/         # Auth, error & validation middleware
│   │   ├── model/              # Mongoose models
│   │   ├── routes/             # Express routers
│   │   ├── schemas/            # Mongoose schemas
│   │   └── validators/         # express-validator rule sets
│   └── server.js
│
├── frontend/                   # React landing page
│   └── src/
│       └── landing_page/       # Page components (Home, About, Pricing…)
│
└── dashboard/                  # React trading dashboard
    └── src/
        └── components/         # Dashboard UI components
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v14+ → [nodejs.org](https://nodejs.org)
- **npm** v6+ *(bundled with Node)*
- **MongoDB** → [Atlas free tier](https://www.mongodb.com/atlas) or a local instance

---

### ⚙️ 1 — Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see [Environment Variables](#-environment-variables)), then:

```bash
npm start
```

> Server runs at **http://localhost:5600**

---

### 🌐 2 — Frontend

```bash
cd frontend
npm install
npm start
```

> Runs at **http://localhost:3000**

---

### 📊 3 — Dashboard

```bash
cd dashboard
npm install
npm start
```

> Runs at **http://localhost:3001**

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/` with the following:

```env
MONGO_URL=your_mongodb_connection_string
PORT=5600
JWT_SECRET=your_super_secret_jwt_key
```

| Variable | Required | Description |
|---|:---:|---|
| `MONGO_URL` | ✅ | MongoDB connection URI (Atlas or local) |
| `PORT` | ✅ | Port the Express server listens on |
| `JWT_SECRET` | ✅ | Secret key for signing JWT tokens |

> ⚠️ **Never commit your `.env` file.** Add it to `.gitignore` if not already present.

---

## 📡 API Reference

### 🔑 Auth — `/api/auth`

| Method | Endpoint | Description | Auth |
|---|---|---|:---:|
| `POST` | `/api/auth/signup` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive a JWT | ❌ |

### 📦 Data — `/api`

| Method | Endpoint | Description | Auth |
|---|---|---|:---:|
| `GET` | `/api/allHoldings` | Fetch all holdings | ✅ |
| `GET` | `/api/allPositions` | Fetch all positions | ✅ |
| `GET` | `/api/allOrders` | Fetch all orders | ✅ |
| `POST` | `/api/newOrder` | Place a new order | ✅ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please read our [📜 Code of Conduct](CODE_OF_CONDUCT.md) before participating.

### 🧑‍💻 How to Contribute

**1. Fork & Clone**
```bash
git clone https://github.com/YOUR_USERNAME/Zerodha-Clone.git
cd Zerodha-Clone
```

**2. Create a branch**
```bash
# Feature
git checkout -b feature/your-feature-name

# Bug fix
git checkout -b fix/issue-description
```

**3. Make your changes**
Keep commits focused — one logical change per commit.

**4. Test before pushing**
- Backend starts without errors → `npm start` inside `backend/`
- UI renders correctly in both `frontend/` and `dashboard/`

**5. Commit using Conventional Commits**
```bash
git commit -m "feat: add watchlist price update"
```

| Prefix | When to use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code refactor, no feature/fix |
| `chore:` | Build, tooling, dependency updates |

**6. Push & open a PR**
```bash
git push origin feature/your-feature-name
```
Then open a Pull Request and describe:
- What the change does
- Related issue number (if any)
- Screenshots for UI changes

---

### 📋 Contribution Rules

| Rule | Detail |
|---|---|
| **Code style** | Follow existing conventions; use ES Modules in backend |
| **One PR per change** | Keep PRs small and focused |
| **No breaking changes** | Open an issue first before changing API contracts or schemas |
| **No hardcoded secrets** | Always use `.env` variables |
| **New dependencies** | Discuss in an issue before adding packages |

---

### 🐛 Reporting a Bug

Open a [GitHub Issue](https://github.com/YOUR_USERNAME/Zerodha-Clone/issues) and include:

- Clear title and description
- Steps to reproduce
- Expected vs. actual behaviour
- Your Node.js version and OS

### 💡 Suggesting a Feature

Open an issue with the label **`enhancement`** and describe:
- The problem it solves
- How you imagine it working

---

## 📄 License

This project is open-source and available under the **[MIT License](LICENSE)**.

By contributing, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

<div align="center">

> ⚠️ **Disclaimer:** This project is built purely for educational purposes and is not affiliated with or endorsed by Zerodha Broking Ltd.

Made with ❤️ using the MERN stack

</div>

