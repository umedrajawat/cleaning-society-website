import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";
import Booking from './components/Booking';





function App() {
 

  return (
    <Router>
      {/* routing to specific pages in react using router */}
    <div className="App">
    <Redirect to exact component={Home}/> 
    <Route exact path="/" component={Home}/>
    <Route path="/home" exact component={Home} />
    <Route path="/bookings" exact component={Booking} />
    </div>
    </Router>
  );
}

export default App;
