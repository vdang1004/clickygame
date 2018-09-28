import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import cards from "./cards.json";
import "./App.css";


class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  };
//reset game 
  gameOver = () => {
    //set topScore if score is greater than topScore
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, () => {
        console.log(this.state.topScore);
      });
    }
    //reset card counts
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
        //increment counter
          cards[i].count = cards[i].count + 1;
          //increment score
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
        <Nav score={this.state.score} topScore={this.state.topScore}><strong>Clicky Game</strong></Nav>
        <Header />
        {/*render each card*/}
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
