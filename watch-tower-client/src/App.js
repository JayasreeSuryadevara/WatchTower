import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import AuthRoute from './components/util/AuthRoute';
// import ProtectedRoute from './components/util/ProtectedRoute';
import SignUpForm from './pages/session/SignUpForm';
import UserProfile from './pages/users/UserProfile';
import LogInForm from './pages/session/LogInForm';
import NavBar from './components/navbar/NavBar';


export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AuthRoute exact path="/signup" component={SignUpForm} />
        <AuthRoute exact path="/login" component={LogInForm} />
        <AuthRoute exact path="/me" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};
