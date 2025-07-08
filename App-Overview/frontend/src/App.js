import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';




function App() {
  return (
    
    <Router>
      <Navbar />
      {/* Define routes for different pages */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/movie/:id" component={MovieDetails}/>

      </Switch>
    </Router>
  );
}
export default App;