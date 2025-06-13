# Backend Setup Guide

## Overview

This guide will help you set up and run the backend server for this project.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Database (PostgreSQL/MySQL/MongoDB - specify your choice)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
API_KEY=your_api_key
```

### 4. Database Setup

```bash
# Run database migrations
npm run migrate
# or
yarn migrate

# Seed the database (optional)
npm run seed
# or
yarn seed
```

## Running the Server

### Development Mode

```bash
npm run dev
# or
yarn dev
```

### Production Mode

```bash
npm run build
npm start
# or
yarn build
yarn start
```

The server will start on `http://localhost:3000` (or your configured PORT).

## API Documentation

Once the server is running, you can access:

- API endpoints at: `http://localhost:3000/api`
- API documentation at: `http://localhost:3000/docs` (if Swagger is configured)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run test` - Run tests
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed the database

## Project Structure

```
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
├── tests/
├── migrations/
├── seeds/
└── docs/
```

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in your `.env` file
2. **Database connection failed**: Verify your DATABASE_URL is correct
3. **Dependencies issues**: Delete `node_modules` and run `npm install` again

### Logs

Check the console output for detailed error messages and debugging information.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## Support

For issues and questions, please create an issue in the repository or contact the development team.
