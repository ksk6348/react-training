import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Atoms/Name'
import Bio from './Atoms/Bio'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: "Kosuke Oya",
      bio: "Yokohama National University",
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Name name={this.state.name}></Name>
          <Bio bio={this.state.bio}></Bio>
        </header>
      </div>
    );
  }

}

export default App;
