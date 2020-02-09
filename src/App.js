import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Homepage from './pages/HomeCompo/homepage';
import './App.css'
import shopPage from './shop/shop.component'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={shopPage}/>
        </Switch>
    </div>
  );
}

export default App;
