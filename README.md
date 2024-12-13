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

## Leveraging Turborepo for Efficient Development

This project uses Turborepo to manage the monorepo, optimizing development workflows through parallel task execution and caching.

## Prerequisites

Ensure you have Node.js version 23 and pnpm installed on your machine. These are essential for running the project efficiently.

## Installation Instructions

1. Install project dependencies:
   ```bash
   pnpm install
   ```

2. Running the Project:
   ```bash
   pnpm dev
   ```
   This command concurrently starts both the client and server.

## Getting Started

1. Start the development server:
```bash
pnpm dev
```
This command utilizes Turborepo to run the `dev` script across all packages concurrently.

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

## Configuration

The project is configured using a `turbo.json` file to define task pipelines and dependencies.

## Troubleshooting

Ensure all dependencies are installed and check logs for errors.

## Tech Stack

- React 18
- tRPC 10
- NestJS
- TailwindCSS
- TypeScript
- React Query
- React Router
- Vite
