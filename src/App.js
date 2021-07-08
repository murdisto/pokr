import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	
} from 'react-router-dom'; // Switch, Redirect,
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { AuthProvider } from "./Auth";
import { PrivateRoute } from './PrivateRoute';
import './App.css';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
          <PrivateRoute exact path="/" component={Home} />          
          <Route exact path="/login" component={Login} />          
          <Route exact path="/signup" component={Signup} />          
          </header>
        </div>
      </Router>
    </AuthProvider>
    
  );
}