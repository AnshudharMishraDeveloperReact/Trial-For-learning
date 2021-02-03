import { StyleSheet, View, TextInput, Image} from 'react-native';
 import React, { Component } from 'react';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 function Input (props) {
    return (
     
 
      
 
          <TextInput
              style={styles.input}
               placeholder={props.placeholder}
               value={props.value}
               onChangeText={props.onChangeText}
               placeholderTextColor = "grey"
               autoCapitalize = "none"
             
               maxLength={30}
          />
 
    );
  }

  export default Input;
 
 
const styles = StyleSheet.create({
 
 
  


   input: {
   
      height:hp('6%'),
      fontSize:hp('2%'),
      borderWidth: 1,
      paddingLeft:wp('4%'),
      marginTop:hp("1"),
      width:wp('60%'),
      borderRadius:wp("2%"),
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 5,
      backgroundColor:"#fff"
     
    
   }
 
});