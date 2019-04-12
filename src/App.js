import React, { Component } from 'react';
import './App.css';
import Name from './Name'
import NameController from './NameController'
import ColorController from './ColorController'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NamesAndColors = () => (
  <div className="App">
    <Name />
    <NameController />
    <ColorController />
  </div>
)


const OtherPage = () => (
  <div className="App">
    <h1>Just another page</h1>
  </div>
)


const Yeezy = () => (
  <div className="App">
    <img src={"https://i.imgur.com/NvC9GnB.jpg"} />
  </div>
)


class App extends Component {
  state = {name: 'Nima'}
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Names And Colors Demo</Link>
              </li>
              <li>
                <Link to="/otherpage/">Other Page</Link>
              </li>
              <li>
                <Link to="/yeezy/">Yeezy!</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={NamesAndColors} />
          <Route path="/otherpage/" component={OtherPage} />
          <Route path="/yeezy/" component={Yeezy} />
        </div>
      </Router>
    );
  }
}

export default App;
