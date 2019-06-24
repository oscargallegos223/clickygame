import React, { Component } from "react";
import Card from "./components/Card/Card.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Head from "./components/Head/Head.js";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.map(card => {
      card.count = 0;
    });
    alert(`Game Over! Click to play again \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((res, data) => {
      if (res.id === id) {
      if(cards[data].count === 0){
        cards[data].count = cards[data].count + 1;
        this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Head score={this.state.score} highscore={this.state.highscore}>Clicky Game</Head>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;