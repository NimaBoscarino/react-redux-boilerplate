import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Name = ({name}) => {
  return (<h1>{name}</h1>)
}

const NameController = ({updateName}) => {
  return (
    <div>
      <button onClick={() => updateName('Tony')}>Tony</button>
      <button onClick={() => updateName('Nima')}>Nima</button>
      <button onClick={() => updateName('Jane')}>Jane</button>
    </div>
  )
}
class App extends Component {
  state = {name: 'Nima'}
  render() {
    return (
      <div className="App">
        <Name name={this.state.name}/>
        <NameController updateName={(name) => {
          this.setState({
            name
          })
        }}/>
      </div>
    );
  }
}


export default App;
