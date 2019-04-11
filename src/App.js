import React, { Component } from 'react';
import './App.css';
import Name from './Name'
import NameController from './NameController'
import ColorController from './ColorController'

class App extends Component {
  state = {name: 'Nima'}
  render() {
    return (
      <div className="App">
        <Name />
        <NameController />
        <ColorController />
      </div>
    );
  }
}

export default App;
