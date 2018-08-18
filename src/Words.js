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
    let listOfCharacters = words.split('');
    return this.setState({
      displayWord: words,
      listOfCharacters: listOfCharacters
    })
  }

  render (){
    const { listOfCharacters } = this.state;
    return (
      <React.Fragment>
        {this.state.displayWord}
        {this.state.listOfCharacters.length}
        <section className=''>
          <p>{listOfCharacters.map(character => '_')}</p>
        </section>
      </React.Fragment>
    )
  }
}

export default Words;