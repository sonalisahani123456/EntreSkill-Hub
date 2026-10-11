# EntreSkill Hub

EntreSkill Hub is a skill-to-startup enablement platform. It helps users explore business ideas, assess entrepreneurial skills, follow a startup roadmap, learn practical topics, and discover mentor support.

## Technology stack

- Frontend: React, Vite, React Router, Tailwind CSS, Lucide icons
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Authentication: bcrypt password hashing and JSON Web Tokens (JWT)

## Features

- Landing page and account registration/login
- Protected user dashboard routes
- MongoDB-backed user accounts
- Editable profile saved through the API
- Skill assessment with score/answers saved to the signed-in user's account
- Business idea recommendations and details
- Startup roadmap with saved selected business
- Learning hub and lesson progress
- Mentor discovery and session booking UI
- User settings and progress summaries

**Data note:** account/profile and assessment data are persisted through the backend. Roadmap step completion, course lesson progress, mentor bookings, and general settings currently use browser local storage, so those items are specific to the browser/device.

## Project structure

```text
EntreSkill-Hub/
├── client/                 # React + Vite frontend
├── server/                 # Express + MongoDB backend
├── .github/workflows/      # Build and backend syntax checks
└── README.md
```

## Prerequisites

- Node.js 22 (or a compatible current Node.js release)
- npm
- MongoDB Atlas database or local MongoDB

## Configure the backend

1. Open a terminal in `server`.
2. Create a `.env` file based on `.env.example`.
3. Set your MongoDB connection string and a long, random JWT secret. Do not commit `.env`.

Example environment variable names:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-host>/<database-name>?retryWrites=true&w=majority
JWT_SECRET=<long-random-secret>
```

## Run locally

Terminal 1 — backend:

```bash
cd server
npm install
npm run dev
```

The API listens on `http://localhost:5000`. A simple health route is available at `GET /`.

Terminal 2 — frontend:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Authentication API

All protected endpoints require this header:

```http
Authorization: Bearer <JWT>
```

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/auth/signup` | Register an account |
| POST | `/api/auth/login` | Sign in and receive a JWT |
| GET | `/api/auth/me` | Get the current account/profile |
| PUT | `/api/auth/profile` | Update profile fields |
| PUT | `/api/auth/assessment` | Save assessment score and answers |

## Build the frontend

```bash
cd client
npm run build
```

The repository also includes a GitHub Actions workflow to build the frontend and check backend JavaScript syntax on pushes and pull requests to `main`.
