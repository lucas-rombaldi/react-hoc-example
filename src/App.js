import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import List from './components/List';

const infoApiURL = 'https://api.github.com/users/lucas-rombaldi';
const reposApiURL = 'https://api.github.com/users/lucas-rombaldi/repos';
const starredApiURL = 'https://api.github.com/users/lucas-rombaldi/starred';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infos apiURL={infoApiURL} />
        <List apiURL={reposApiURL} title='Minha lista de repos:' />
        <List apiURL={starredApiURL} title='Minha lista de favoritos:' />
      </div>
    );
  }
}

export default App;