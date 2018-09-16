import React, { Component } from 'react';
import classNames from 'classnames';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.word,
      keyboard: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      selectedStr: '',
      badCharacters: [],
      goodCharacters: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const character = e.target.innerText;
    //let test = this.isIntheWord(character);
    this.setState({
      selectedStr: character,
    }, () => {
      this.isIntheWord(character);
    });
      
  }

  isIntheWord = (character) => {
    const { word } = this.state;
    const characterToUpperCase = character.toUpperCase();
  
    const isPresent = word.filter((item) => {
      let str = item.toUpperCase();
      return str === characterToUpperCase;
    })
    if (isPresent.length === 0) {
      this.setState({
        badCharacters: [...this.state.badCharacters, characterToUpperCase]
      });
    } else {
      this.setState({
        goodCharacters: [...this.state.goodCharacters, characterToUpperCase]
      })
      this.props.findCharacter(characterToUpperCase)
    }
   
  }

  render () {

    const characters = () => {
      return this.state.keyboard.map((character, i)=> {
        return (
          <div key={i} 
            className={
              classNames(
                {'selected': this.state.selectedStr === character},
                {'disabled': !!this.state.badCharacters.find(str => str === character)},
                {'active': !!this.state.goodCharacters.find(str => str === character)}
              )} 
            onClick={this.handleChange}
            > 
            {character}
          </div>)
        })
    }
    return (
      <div id='keyboard'>
        {characters()}
      </div>
    )
  }
}

export default Keyboard
