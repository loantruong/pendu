import React, { Component } from 'react';
import Keyboard from './Keyboard';

class Words extends Component {
  constructor (props) {
    super (props);
    this.state = {
      listOfWords: ['indigence', 'cabane', 'halloween', 'grange', 'morphine', 'ombrelle', 'tornade', 'hippocampe', 'Kouign-amann', 'rhododendron', 'coccyx', 'ornithorynque', 'necromancie', 'torpeur', 'dilapider', 'poule', 'graphisme', 'peinture', 'cartilage', 'coquelicot', `aujourd'hui`],
      listOfCharacters: [],
      charactersToFind: [],
      displayWord: '',
      win: false
    }
  }

  componentWillMount() {
    this.randomWords(this.state.listOfWords);
  }
  /**
   * random words or sentence
   */
  randomWords = (str) => {
    let words = str[Math.floor(Math.random()*str.length)];
    let listOfCharacters = words.split('');
    let displayCharacters = listOfCharacters.map(character => {
      if(character === '-' || character === `'`) { 
        return character
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
      let isWin = this.state.charactersToFind.filter(str => str === '_');
      charactersToFind[i] = str;
      if(isWin.length === 1){
        this.setState({
          win: true,
          charactersToFind: [...charactersToFind]
        })
      } else {
        return this.setState({
          charactersToFind: [...charactersToFind]
        });
      }
     }});    
  }

  playAgain = (e) => {
    e.preventDefault();
    this.setState({
      charactersToFind: [],
      listOfCharacters: [],
      displayWord: '',
      win: false
    });
    this.randomWords(this.state.listOfWords);

  }

  render (){
    const { listOfCharacters, charactersToFind, win } = this.state;
    const newWord = (
      <div className="win">
        <h2>souhaitez vous rejouer et déviner un autre mot ?</h2> 
        <button className="cta-win" onClick={this.playAgain}>rejouer</button>
      </div>
    );

    return (
      <React.Fragment>
        <section className='guess-word'>
        {win ? <p>Féliciation, le mot était bien :</p> : ''}

          <p className="guess">{charactersToFind.map((item) => item)}</p>
        </section>
        <section>
          {win ? newWord : <Keyboard word={listOfCharacters} findCharacter={this.findCharacter}/>}
        </section>
      </React.Fragment>
    )
  }
}

export default Words;