import React from 'react';
import { Route, Redirect } from 'react-router';
import Header from './Layout/Header';
import './App.scss';
import Library from './components/Library';
import Player from './components/Player';

function App() {
  return (
    <div>
      <Redirect exact from='/' to='/library'></Redirect>
      <Route exact path='/library' component={Library}></Route>
      <Route exact path='/player' component={Player}></Route>
    </div>
  );
}

export default App;
