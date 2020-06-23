import React  from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
          {/* <Dashboard  /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
