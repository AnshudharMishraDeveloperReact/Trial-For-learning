import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.text}> Just For Trail  </Text>
                <Text style={styles.text1}> All prepared screen here  </Text>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('AssignedList')}}>
                <Text style={styles.text2}>{'>> Assigned List '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('UnassignedList')}}>
                <Text style={styles.text2}>{'>> Un-Assigned List '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <Text style={styles.text2}>{'>> Profile '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('Signup')}}>
                <Text style={styles.text2}>{'>> ManagerList '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('Leads')}}>
                <Text style={styles.text2}>{'>> Full information '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('LeadsDetails')}}>
                <Text style={styles.text2}>{'>> Leads informaation '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('Demo')}}>
                <Text style={styles.text2}>{'>> Information '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('MeetingInfo')}}>
                <Text style={styles.text2}>{'>> MeetingInfo '}  </Text> 
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('Practice')}}>
                <Text style={styles.text2}>{'>> Practice '}  </Text> 
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       marginLeft:wp("10%"),
        marginTop:hp("30%")
    },
    text:{
        fontSize:hp("3.5%"),
        fontWeight:"bold"
    },
    text1:{
        fontSize:hp("3%"),
        
    },
    text2:{
        fontSize:hp("2.5%"),
        color:"red",
        marginTop:hp("2%")
        
    }
})
