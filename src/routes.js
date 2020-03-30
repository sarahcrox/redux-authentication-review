import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth';
import Dash from './Components/Dash/Dash';
import Wiz from './Components/Wizard/Wiz';

export default (
  <Switch>
    <Route exact path='/' component={Auth}/>
    <Route path='/dash' component={Dash} />
    <Route path='/wizard' component={Wiz} />
  </Switch>
)