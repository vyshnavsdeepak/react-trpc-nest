# React + tRPC + NestJS Dashboard

A modern, type-safe dashboard application built with React, tRPC, and NestJS.

## Features

- ✨ Full type safety between frontend and backend
- 🚀 Modern React with Vite
- 🎨 Beautiful UI with TailwindCSS
- 🔄 Real-time data updates with React Query
- 📊 Example dashboard with mock data
- 👥 User management example
- 🔒 Type-safe API calls with tRPC

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
# Terminal 1: Start the backend
cd packages/server
pnpm dev

# Terminal 2: Start the frontend
cd packages/client
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── packages/
│   ├── client/          # React frontend
│   ├── server/          # NestJS backend
│   └── shared/          # Shared types and tRPC router
```

## Development

- Frontend runs on port 3000
- Backend runs on port 4000
- API endpoint: http://localhost:4000/trpc

## Tech Stack

- React 18
- tRPC 10
- NestJS
- TailwindCSS
- TypeScript
- React Query
- React Router
- Vite
