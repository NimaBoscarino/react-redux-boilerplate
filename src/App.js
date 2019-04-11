import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name'
import NameController from './NameController'

// const Name = () => {
//   return (<h1>Nima</h1>)
// }

// const NameController = () => {
//   return (
//     <div>
//       <button>Tony</button>
//       <button>Nima</button>
//       <button>Jane</button>
//     </div>
//   )
// }
class App extends Component {
  state = {name: 'Nima'}
  render() {
    return (
      <div className="App">
        <Name />
        <NameController />
      </div>
    );
  }
}


export default App;
