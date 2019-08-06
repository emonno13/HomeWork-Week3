import React from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';

function GameStatus (props){
    return(
        
        <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/f9/0d/d3/f90dd321fbd5fed51ef30e0ef618f4b9.jpg'  }}
        style={{
          height: 120,
          width: 400,
          resizeMode:'contain',
          position: 'relative',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
            <Text style={styles.textResult}>
             {props.result}
            </Text>
            <Text style={styles.textCount}>
             Turn : {props.count} 
            </Text>
            <Text style={styles.textCount}>
             Win: {props.countWin} /
             Lose : {props.countLose} /
             Tie : {props.countTie}
            </Text>
          </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
    textResult:{
        color: 'white',
         fontSize: 50,
         fontWeight :  'bold',
         fontFamily : 'serif'
    },
    textCount:{
      color : 'white',
      backgroundColor :'black',
      borderColor : 100,
      
    }
   });
export default GameStatus;