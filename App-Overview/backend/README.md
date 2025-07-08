# Movie Recommendation App - Backend

## Overview
This is the backend for the Movie Recommendation App, a fullstack application that allows users to get personalized movie recommendations, save favorite movies, create custom watchlists, rate and review movies, and manage their profiles.

## Tech Stack
- **Node.js** with **Express.js** for the server
- **MongoDB** for the database
- **JWT** for authentication
- **Axios** for making API requests to external services (TMDB)

## Features
- User authentication (registration and login)
- CRUD operations for user profiles and movie data
- Integration with TMDB API for fetching movie details
- Watchlist management
- Rating and reviewing movies

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- A TMDB API key

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/movie-recommendation-app.git
   cd movie-recommendation-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   ```

### Running the Application
1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5000` by default.

### API Endpoints
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user
- **GET** `/api/users/:id` - Get user profile
- **GET** `/api/movies/trending` - Get trending movies from TMDB

## Deployment
- The backend can be deployed on platforms like Render or Heroku.
- Ensure to set the environment variables in the deployment settings.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.