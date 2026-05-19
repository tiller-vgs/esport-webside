# E-Sport Website

A Next.js website for the e-sport school course. The site is mainly used to publish and display news articles school e-sport activities.

## Features

- A landing page
- A news page to display all of the news articles
- Admin page for creating, editing, and deleting news articles
- Authentication-protected admin area
- PostgreSQL database using Prisma
- Responsive layout with reusable UI components

## Tech Stack

- Next.js
- React
- TypeScript
- PostgreSQL
- Prisma
- TanStack React Query
- Tailwind CSS
- Better Auth

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Change Database Access

In the docker-compose.yml file change these lines:

```yml
environment:
  POSTGRES_USER: myuser #Change database username
  POSTGRES_PASSWORD: mypassword #Change database password
  POSTGRES_DB: mydb #Change database name
```

In the .env file you need to update the database url with the new information in the docker-compose.yml file

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"
```

### 3. Update the better auth secret

To generate a new secret you can head to the website below and on step 2 of the installation you will be able to generate a new secret
https://better-auth.com/docs/installation

```env
BETTER_AUTH_SECRET=""
```

### 4. Setup the database

```bash
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
```

Open:
http://localhost:3000
