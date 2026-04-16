# Backend Setup

## Purpose
This folder contains the backend server for the Zerodha clone app, built with Node.js, Express.js, and MongoDB.

## Project Structure
```
backend/
├── package.json          # Dependencies and scripts
├── server.js             # Entry point, connects DB and starts server
├── .env.example          # Environment variables template
├── readme.md             # This file
└── src/
    ├── app.js            # Express app setup with middleware and routes
    ├── config/
    │   ├── env.js        # Loads environment variables
    │   └── dbconnect.js  # MongoDB connection
    ├── controllers/
    │   └── api.js        # API handlers for holdings, positions, orders
    ├── middleware/
    │   └── Error/
    │       ├── ApiError.js       # Custom error class
    │       ├── asyncHandler.js   # Async function wrapper
    │       └── error.middleware.js # Error handling middleware
    ├── model/
    │   ├── HoldingsModel.js  # Holdings Mongoose model
    │   ├── OrdersModel.js    # Orders Mongoose model
    │   └── PositionsModel.js # Positions Mongoose model
    ├── routes/
    │   └── route.js          # API routes
    ├── schemas/
    │   ├── HoldingsSchema.js  # Holdings schema
    │   ├── OrdersSchema.js    # Orders schema
    │   └── PositionsSchema.js # Positions schema
    ├── utils/                 # Empty
    └── validators/            # Empty
```

## Required Environment File
Create a `.env` file in the `backend/` folder by copying the example file:

```bash
cd backend
copy .env.example .env
```

Then update the values in `backend/.env`:

```env
PORT=5600
MONGO_URL=mongodb://localhost:27017/your_database_name
```

## Install Dependencies

```bash
cd backend
npm install
```

## Start the Server

```bash
cd backend
npm start
```

This uses nodemon for development, which auto-restarts on file changes.

## API Endpoints
All endpoints are prefixed with `/zerodha`.

### GET /zerodha/allHoldings
Fetches all holdings data from the database.

**Response:**
```json
{
  "allHoldings": [...],
  "message": "holdings data fetched successfully",
  "success": true
}
```

### GET /zerodha/allPositions
Fetches all positions data from the database.

**Response:**
```json
{
  "allPositions": [...],
  "message": "Position data fetched successfully",
  "success": true
}
```

### POST /zerodha/newOrder
Creates a new order.

**Request Body:**
```json
{
  "name": "string",
  "qty": number,
  "price": number,
  "mode": "string"
}
```

**Response:**
```
"Order saved!"
```

## Database Models and Schemas

### Holdings
- **Schema:** name (String), qty (Number), avg (Number), price (Number), net (String), day (String)
- **Model:** HoldingsModel

### Positions
- **Schema:** product (String), name (String), qty (Number), avg (Number), price (Number), net (String), day (String), isLoss (Boolean)
- **Model:** PositionsModel

### Orders
- **Schema:** name (String), qty (Number), price (Number), mode (String)
- **Model:** OrdersModel

## Middleware
- **CORS:** Enabled for cross-origin requests
- **JSON/URL-encoded parsing:** Handles request bodies
- **Error handling:** Custom ApiError class, asyncHandler wrapper, and error middleware

## Dependencies
- **express:** Web framework
- **mongoose:** MongoDB ODM
- **cors:** Cross-origin resource sharing
- **dotenv:** Environment variable loading
- **passport & passport-local:** Authentication (not currently used in routes)
- **nodemon:** Development auto-restart

## Notes
- The backend uses ES modules (`type: "module"` in package.json).
- Server starts on `PORT` from .env or defaults to 5600.
- Database connection uses `MONGO_URL` from .env.
- Error responses include status code, message, and success flag.

## Dummy Data Examples
Use these dummy objects for holding and position data if you need sample values.

### Holding data
```json
{
  "name": "WIPRO",
  "qty": 4,
  "avg": 489.3,
  "price": 577.75,
  "net": "+18.08%",
  "day": "+0.32%"
}
```

### Position data
```json
{
  "product": "CNC",
  "name": "AXISBANK",
  "qty": 2,
  "avg": 950.0,
  "price": 910.4,
  "net": "-4.16%",
  "day": "-0.95%",
  "isLoss": true
}
```
