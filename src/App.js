import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, () => {
        console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nYour Score: ${this.state.score}`);
    this.setState({score: 0});
  }

  clickCounter = id => {
    this.state.cards.find((item, i) => {
      if (item.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, () => {
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
        <Header score={this.state.score} topScore={this.state.topScore}><strong>Clicky Memory Game</strong></Header>
        {this.state.cards.map(card => (
          <Card
            clickCounter={this.clickCounter}
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
