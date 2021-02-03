import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Alert } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function Button (props) {

   Verify = () => {
      Alert.alert("Successful");
  };
      return (
         <View style = {styles.container}>
            
            <TouchableOpacity 
            // onPress={this.Verify}
            style = {styles.input}>
            <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
        
        
           
         </View>
      )
 
}
export default Button;

const styles = StyleSheet.create({
   container: {
      paddingTop:hp('1%'),
      justifyContent:'center',
      alignItems:'center',
   },
   input: {
   
      height:hp('8%'),
      fontSize:hp('2.5%'),
      borderColor: '#7a42f4',
      borderWidth: 1,
      justifyContent:'center',
      alignItems:'center',
     
      borderRadius:wp('5%'),
      width:wp('80%'),
      backgroundColor:'#A3E4D7'
   },
   text:{
    fontSize:hp('4%'),
    color:'#fff',
    fontWeight:'bold'
   }
})