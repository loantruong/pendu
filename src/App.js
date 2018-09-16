import React, { Component } from 'react';
import Words from './Words';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Hangman game</h1>
        </header>
        <main>
          <Words />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
