import React from 'react';
import photo from './img/rascal.jpg';
import './App.css';
import Name from './Atoms/Name';
import Bio from './Atoms/Bio';
import Photo from './Atoms/Photo';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: "Kosuke Oya",
      bio: "Yokohama National University",
      photo,
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Photo photo={this.state.photo}></Photo>
          <Name name={this.state.name}></Name>
          <Bio bio={this.state.bio}></Bio>
        </header>
      </div>
    );
  }

}

export default App;
