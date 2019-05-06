import React, {Component} from 'react';

class DiceRoller extends Component{

  constructor(props){
    super(props)
    this.state = {
      rollResult:0
      }
      this.rollDice = this.rollDice.bind(this);
  }

  render(){
    return (
      <>
      <h2> You have rolled a {this.state.rollResult} </h2>
      <button onClick={() =>{ this.rollDice(this.props.dice.small) } } > roll the D{this.props.dice.small} </button>
      <button onClick={() =>{ this.rollDice(this.props.dice.medium) } } > roll the D{this.props.dice.medium} </button>
      <button onClick={() =>{ this.rollDice(this.props.dice.large) } } > roll the D{this.props.dice.large} </button>
      </>
    )
  };

  rollDice(number){
    this.setState(()=>{
    return {rollResult: Math.floor(Math.random()*(number)+1)}
    });
  };
}

export default DiceRoller;
