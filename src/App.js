import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bone from './containers/Bone/Bone';
import Signup from './containers/Pages/AuthPages/Signup/Signup';
import Signin from './containers/Pages/AuthPages/Signin/Signin';
import home from './containers/Pages/Home/Home';
import FileExtract from './containers/Pages/converter/FileExtract/FileExtract';
import ViewFiles from './containers/Pages/converter/viewConvert/ViewFiles';
import Logout from './containers/Pages/AuthPages/Logout/Logout';



function App() {
  return (
    <div>
     <Bone>
        <Switch>
          <Route path='/register' component={Signup} />
          <Route path='/login' component={Signin} />
          <Route path='/convert' component={FileExtract} />
          <Route path='/files_converted' component={ViewFiles} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={home} /> 
        </Switch>
     </Bone>
    </div>
  );
}

export default App;
