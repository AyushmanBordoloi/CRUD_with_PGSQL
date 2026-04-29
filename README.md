# CRUD with PostgreSQL

A learning project to practice connecting to a PostgreSQL database and implementing basic CRUD operations using Node.js and Express.

---

## What I'm Learning

- Connecting a Node.js app to a PostgreSQL database
- Building REST API endpoints for CRUD operations
- Writing SQL queries for inserting, fetching, updating, and deleting data

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Library:** `pg` (node-postgres)

---

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL installed and running
- A PostgreSQL database created

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/CRUD_with_postgres.git
cd CRUD_with_postgres

# Install dependencies
npm install
```

### Database Setup

Connect to PostgreSQL and create a table:

```sql
psql -U your_username -d your_database

CREATE TABLE items (
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

### Run the Server

```bash
node index.js
```

Server runs at `http://localhost:3000`

---

## API Endpoints

### Connection
The app establishes a connection to PostgreSQL using the `pg` library on startup.

---

### POST — Create an Item

```
POST /items
```

**Request Body:**
```json
{
  "name": "Sample Item",
  "description": "This is a test item"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Sample Item",
  "description": "This is a test item",
  "created_at": "2025-04-29T10:00:00.000Z"
}
```

---

### GET — Fetch All Items

```
GET /items
```

**Response:**
```json
[
  { "id": 1, "name": "Sample Item", "description": "This is a test item" },
  { "id": 2, "name": "Another Item", "description": "Second entry" }
]
```

---

### GET — Fetch Item by ID

```
GET /items/:id
```

**Response:**
```json
{
  "id": 1,
  "name": "Sample Item",
  "description": "This is a test item"
}
```

---

### PUT — Update an Item

```
PUT /items/:id
```

**Request Body:**
```json
{
  "name": "Updated Name",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Updated Name",
  "description": "Updated description"
}
```

---

### DELETE — Delete an Item

```
DELETE /items/:id
```

**Response:**
```json
{
  "message": "Item deleted successfully"
}
```

---

## Project Structure

```
CRUD_with_postgres/
├── index.js         # Entry point, server setup
├── db.js            # PostgreSQL connection config
├── routes/
│   └── items.js     # Route handlers for CRUD operations
├── .env             # Environment variables (not committed)
├── .gitignore
└── package.json
```

---

## .gitignore

Make sure `.env` is ignored:

```
node_modules/
.env
```

---

## Notes

- This is a learning project — not production-ready
- Error handling is minimal and will be improved over time
- Will explore connection pooling and parameterized queries next

---

## Resources

- [node-postgres (pg) Docs](https://node-postgres.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Express.js Docs](https://expressjs.com/)
