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
import PasswordChg from './pages/users/PasswordChg';
import NewsPage from './pages/news/NewsPage';

import SearchForm from './pages/search/SearchForm';

export default () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <AuthRoute path="/signup" component={SignUpForm} />
        <AuthRoute path="/news" component={NewsPage} />
        <AuthRoute path="/login" component={LogInForm} />
        <ProtectedRoute exact path="/me" component={UserProfile} />
        <ProtectedRoute exact path="/watchlist" component={WatchList} />
        <ProtectedRoute exact path="/password" component={PasswordChg} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchForm} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
