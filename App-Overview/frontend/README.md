# Movie Recommendation App

## Overview
This is a fullstack movie recommendation application that allows users to get personalized movie recommendations, save favorite movies, create custom watchlists, rate and review movies, and manage their profiles.

## Tech Stack
- **Frontend**: React with TailwindCSS or Material UI
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB
- **Authentication**: JWT
- **External API**: TMDB (The Movie Database)
- **Deployment**: Vercel (Frontend), Render (Backend)

## Features
- User authentication (login and registration)
- Personalized movie recommendations
- Ability to save favorite movies
- Custom watchlists management
- Rate and review movies
- User profile management

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB database set up
- TMDB API key

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/movie-recommendation-app.git
   cd movie-recommendation-app/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add your TMDB API key:
   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

### Running the Application
To start the frontend application, run:
```
npm start
```

### Folder Structure
```
src/
│
├── components/          # Reusable components
│   ├── MovieCard.jsx
│   ├── Watchlist.jsx
│   ├── Rating.jsx
│   └── Navbar.jsx
│
├── pages/              # Application pages
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   └── MovieDetails.jsx
│
├── api/                # API calls
│   └── tmdb.js
│
├── services/           # Authentication services
│   └── auth.js
│
├── App.js              # Main application component
└── index.js            # Entry point of the application
```

## Deployment
- Frontend: Deploy the frontend application on Vercel.
- Backend: Deploy the Express backend on Render or Heroku.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.