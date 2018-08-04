import React, { Component } from 'react';

class Words extends Component {
  constructor (props) {
    super (props);
    this.state = {
      listOfWords: ['hello', 'javascript', 'souris', 'chapeau', 'peau'],
      displayWord: '',
      listOfCharacters: [],
    }
  }

  componentDidMount() {
    this.randomWords(this.state.listOfWords);
  }

  /**
   * random words or sentence
   */
  randomWords = (items) => {
    let words = items[Math.floor(Math.random()*items.length)];
    return this.setState({
      displayWord: words,
    })
  }

  // function to count word + space -> render '_'

  secretWord = (words) => {
    console.log(words)
   words.map(character => {
    console.log(character)
     return this.setState({
      listOfCharacters: this.state.listOfCharacters.push(character)
     })
   });
  }


  render (){
    return (
      <React.Fragment>
        {this.state.displayWord}
        {this.state.listOfCharacters.length}
        {this.secretWord(this.state.listOfCharacters)}
        <section className=''>
          <p>{this.state.displayWord}</p>
        </section>
      </React.Fragment>
    )
  }
}

export default Words;