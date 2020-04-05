import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import AuthRoute from './components/util/AuthRoute';
import ProtectedRoute from './components/util/ProtectedRoute';
import SignUpForm from './pages/session/SignUpForm';
import UserProfile from './pages/users/UserProfile';
import LogInForm from './pages/session/LogInForm';
import NavBar from './components/navbar/NavBar';
import ErrorPage from './pages/error/ErrorPage';
import WatchList from './pages/watchlist/WatchList';


export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <AuthRoute path="/signup" component={SignUpForm} />
        <AuthRoute path="/login" component={LogInForm} />
        <ProtectedRoute exact path="/me" component={UserProfile} />
        <ProtectedRoute exact path="/watchlist" component={WatchList} />
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
