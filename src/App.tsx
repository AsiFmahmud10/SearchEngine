import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Switch>
                     <Route exact path='/'>
                            <Home/>
                     </Route>
                     <Route exact path='/search'>
                            <Search/>
                     </Route>
                     
              </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
