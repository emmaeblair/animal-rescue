Animis (work in progress)

### Problem Statement:

Animal rescues are often non-profit, with little income to spare. As a result, sophisticated systems that are tailored to their mission are either too expensive or do not exist. This solution aims to combine all aspects of an animal rescue into one system that takes care of the busy work and allows all attention to be focused on saving as many animals as possible.

### Database

PostgreSQL is used for persistence. To create the initial animals schema:

```bash
psql -U your_user -d your_database -f migrations/001_initial_animals_schema.sql
```

Or from `psql`: `\i migrations/001_initial_animals_schema.sql`

### Project structure

```
animal-rescue/
├── migrations/          # SQL schema migrations
├── server/              # Node.js API
│   ├── src/
│   │   ├── config/      # Database and app config
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
│   ├── index.js
│   └── package.json
└── README.md
```

### API (server)

REST API for animals and statuses (TypeScript + Express). Run from the `server` directory.

1. Copy env and set your database URL:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env: set DATABASE_URL and optionally PORT
   ```
2. Install and run:
   ```bash
   npm install
   npm run dev
   ```
   API base URL: `http://localhost:3000` (or your `PORT`). For production: `npm run build` then `npm start`.

**Endpoints:**

| Method | Path              | Description              |
|--------|-------------------|--------------------------|
| GET    | /api/statuses     | List all statuses        |
| GET    | /api/animals      | List all animals         |
| POST   | /api/animals      | Create an animal         |

POST body for `/api/animals`: `name` (string), `species` ("dog" \| "cat"), `status_id` (number) required; `sex` ("male" \| "female"), `size`, `age`, `description` optional.

