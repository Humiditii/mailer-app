import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bone from './containers/Bone/Bone';
import Signup from './containers/Pages/AuthPages/Signup/SendMail';
import home from './containers/Pages/Home/Home';



function App() {
  return (
    <div>
     <Bone>
        <Switch>
          <Route path='/send' component={Signup} />
          <Route path='/' exact component={home} /> 
        </Switch>
     </Bone>
    </div>
  );
}

export default App;
