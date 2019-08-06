import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from'./components/ButtonGroup';
import PlayerCard from './components/PlayerCard';
import * as Font from 'expo-font';
import {CHOICES} from './constants'
import{randomComputerChoice,getRoundOutcome,getCount,getCountLose,getCountWin,getCountTie} from './components/utilities'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        playerChoice: {},
        computerChoice:{},
        countWin : '',
        countLose:'',
        countTie:'',
        count :'',
        result: 'GO GO GO',
    }
  }
  
  
  onPressButton = playerChoice => {
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name,computerChoice.name);
    count = getCount();
    countWin = getCountWin();
    countLose = getCountLose();
    countTie = getCountTie();
    this.setState({
      playerChoice : foundChoice,
      computerChoice : computerChoice,
      count: count,
      countWin : countWin,
      countLose : countLose,
      countTie : countTie,
      result
    })
  };

  render(){
    return (
      <View style={styles.container}>
        <View style ={styles.GameStatusWrapper}>
          <GameStatus 
          result={this.state.result}  
          count={this.state.count}
          countWin= {this.state.countWin}
          countLose = {this.state.countLose}
          countTie = {this.state.countTie}
          />
        </View>
        <View style={styles.PlayerCardWrapper}>
          <PlayerCard playerName="PLAYER" choice={this.state.playerChoice}/>
          <PlayerCard playerName="COMPUTER" choice={this.state.computerChoice}/>
        </View>
        <View style={styles.ButtonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton}/> 
        </View>
        
      </View>
    );
  }
  
}
////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',

  },
  GameStatusWrapper:{
    flex :0.2,
    backgroundColor: '#EEEEE0',
    
    justifyContent : 'center',
    alignItems :'center'
    
  },
  PlayerCardWrapper:{
    flex: 0.4,
    flexDirection: 'row',
    borderWidth:5
  },
  ButtonGroupWrapper:{
    flex: 0.4,
    justifyContent : 'center',
    alignItems :'center'
  }
});
