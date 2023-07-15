import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './components/homePage/HomePage';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Info from './components/info/Info';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/:id" component={Info}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;