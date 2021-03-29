import React from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Chat from './Components/chatroom/components/chat/Chat';
import Join from './Components/chatroom/components/join/Join';
import './App.css';


import { BrowserRouter as Router, Route } from "react-router-dom";








const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Navbar} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;