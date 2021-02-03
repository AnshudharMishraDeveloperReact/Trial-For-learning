import {StyleSheet, View, TextInput, Image} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Passwordinput(props) {
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../../assests/padlock.png')}
          style={styles.ImageStyle}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholderTextColor="grey"
          autoCapitalize="none"
          maxLength={40}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

export default Passwordinput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('1%'),
    marginTop:hp("-0.5%")
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageStyle: {
    height: hp('3.2%'),
    width: wp('6%'),
    paddingLeft: wp('4%'),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {
    height: hp('7%'),
    fontSize: hp('2.5%'),
    borderBottomColor: '#FF5631',
    borderBottomWidth: 1,
    paddingLeft: wp('10%'),
    borderRadius: wp('2%'),
    width: wp('80%'),
    marginLeft: wp('-8%'),
    color: "#000"
  },
});
