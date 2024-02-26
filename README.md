# college-challenge

A real-time voting system where users can create a poll and other users can cast their votes. The system generates a ranking among the options and updates the votes in real-time.

## Requisites

- Docker;
- Node.js;

## Setup

- Clone the repository;
- Install dependencies (`npm install`);
- Setup PostgreSQL (`docker compose up -d`);
- Setup Prisma `cd packages/college-api && npx prisma generate`;
- Copy `cd packages/college-api/.env.example` file (`cp cd packages/college-api/.env.example .env`);
- Run Application (`npm run dev`);
- Run API (`npm run dev:api`);
- Run CLIENT (`npm run dev:client`);

- Test API here! (I personally recommend testing with [Hoppscotch](https://hoppscotch.io/)).
