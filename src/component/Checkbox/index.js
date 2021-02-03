import React, {Component} from 'react';
import {Platform,Text,TouchableOpacity, StyleSheet,Button,props, Image,Dimensions, View,ImageBackground} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  const { height, width } = Dimensions.get('window');


export default class CheckBo extends Component {
    constructor(props){
        super(props)
        this.state = {
            switchImage:false,
        }
    }
    
    Troggle() {
        this.setState({ switchImage: !this.state.switchImage })
    }

    

    render(){
        return (
    

<TouchableOpacity onPress={() => this.Troggle()}>

<Image style={styles.checkboxIcon} source={this.state.switchImage ? require('../../assests/checked.png') : require('../../assests/unchecked.png')} />
</TouchableOpacity>

    );
}
}
const styles=StyleSheet.create({
    

        checkboxIcon: {
            width:wp('8%'),
            height:hp('3.8%'),
            marginLeft:wp('12%'),
            justifyContent: 'center',
         
            
        }
    })


