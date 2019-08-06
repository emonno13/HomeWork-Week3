import React from 'react';
import {View ,Text, TouchableOpacity,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {CHOICES} from  '../constants';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
function ButtonGroup(props){

           return CHOICES.map(item =>{
                return(
                    <TouchableOpacity 
                    key={item.name}
                    style={styles.button} 
                    onPress={() => props.onPressButton(item.name)}>
                        <LinearGradient
                            colors={[SEND_MESSAGE_COLOR,FOLLOW_COLOR]}
                            style={styles.followButton}
                            >
                            <Text style={styles.Text}>
                                {item.name}
                            </Text>
                        </LinearGradient>  
                    </TouchableOpacity>
                )

            })

}


const styles = StyleSheet.create({
   button:{
       alignItems: 'center',
       marginVertical : 7, // khoảng cách giữa các nút
       paddingHorizontal: 10,
       paddingVertical : 5,
       borderRadius: 12
   },
   Text:{
        color : 'white',
        fontSize: 18,
        fontWeight : '600'
   },
   followButton:{
    padding: 10, alignItems: 'center', borderRadius: 5,
    width: 100,
    height : 30,
    justifyContent: 'center', // chữ follow nằm giữa
    alignItems : 'center', // chữ follow canh giữa 
    borderRadius: 20,
    shadowColor: "#000", //tạo shadow cho nút
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.00,
    elevation: 24,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
   }
  });

export default ButtonGroup;