import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/'>
      <Route path='/month-Statistics' exact/>
      </Switch>
    </div>
  );
}

export default App;
