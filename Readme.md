# Backend Setup Guide

## Overview

This guide will help you set up and run the backend server for this project.

## Prerequisites

- Node.js (v16 or higher)
- npm 
- Database mongodb
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

```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
PORT=

DATABASE_URL=your_database_connection_string
BASE_URL=your-backend-link
```


## Running the Server

### Development Mode

```bash
npm run dev
```




## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server




## Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in your `.env` file
2. **Database connection failed**: Verify your DATABASE_URL is correct
3. **Dependencies issues**: Delete `node_modules` and run `npm install` again

