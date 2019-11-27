import React from 'react';
import { Route } from 'react-router';
import Header from './Layout/Header';
import './App.scss';
import ChooseFolders from './components/ChooseFolders';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={ChooseFolders}></Route>
    </div>
  );
}

export default App;
