import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#0c0c0c';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{
        width: "40%",
        display: "inline-block"
      }}>
      <h2 style={{
          color: defaultTextColor
        }}>Number Text</h2>
    </div>);
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
      <img/>
      <input type="text"/>
    </div>);
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{
        ...defaultStyle,
        display: 'block-inline',
        width: "25%"
      }}>
      <img/>
      <h3>Playlist Name</h3>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
    </div>);
  }
}

class App extends Component {
  render() {
    let name = 'Joydeep'
    let dark = '#0c0c0c'
    let headerStyle = {
      color: dark,
      'font-size': '50px'
    }
    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>);
  }
}

export default App;
