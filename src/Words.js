import React, { Component } from 'react';
import Keyboard from './Keyboard';

class Words extends Component {
  constructor (props) {
    super (props);
    this.state = {
      listOfWords: ['hello', 'javascript', 'souris', 'chapeau-melon'],
      listOfCharacters: [],
      charactersToFind: [],
      displayWord: ''
    }
  }

  componentWillMount() {
    this.randomWords(this.state.listOfWords);
  }

  /**
   * random words or sentence
   */
  randomWords = (items) => {
    let words = items[Math.floor(Math.random()*items.length)];
    let listOfCharacters = words.split('');
    let displayCharacters = listOfCharacters.map(character => {
      if(character === '-') { 
        return '-'
      } else {
        return '_'
      }
    })
    return this.setState({
      displayWord: words,
      listOfCharacters: listOfCharacters,
      charactersToFind: displayCharacters
    })
  }

  

  findCharacter = (str) => {
    const { listOfCharacters, charactersToFind } = this.state;

    return listOfCharacters.map((item, i) => {
     if (item.toUpperCase() === str) {
      charactersToFind[i] = str;
      return this.setState({
        charactersToFind: [...charactersToFind]
      });
     }});    
  }

  render (){
    const { listOfCharacters, charactersToFind } = this.state;
   
    return (
      <React.Fragment>
        {this.state.displayWord}
        <section className=''>
          <p>{charactersToFind.map((item) => item)}</p>
        </section>
        <section>
          <Keyboard word={listOfCharacters} findCharacter={this.findCharacter}/>
        </section>
      </React.Fragment>
    )
  }
}

export default Words;