import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './global.css';
import { Header } from './components/header';
import { ChatPage } from './pages/chatPage'
import { Profile } from './pages/profile';
import { MessageProvider } from './components/messageProvider'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <h1>404</h1>
          <Link to="/chat">go to Chat</Link>
          <Link to="/profile">go to Profile</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);


