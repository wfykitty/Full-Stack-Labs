import React from 'react';
import Chats from "./components/chats"
import Navigation from './Navigation';
import Logs from "./components/logs"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
  <BrowserRouter> 
    <Navigation> 
    </Navigation>

     <Switch>
          <Route path="/" component={Chats} exact />
          <Route path="/logs" component={Logs} />
      
        </Switch>
        
  </BrowserRouter>
  );
}

export default App;