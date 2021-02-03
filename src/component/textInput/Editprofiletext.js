import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Editprofiletext(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        maxLength={40}
      />
    </View>
  );
}
export default Editprofiletext;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: hp('2.5%'),
    borderColor: '#000',
    borderBottomWidth: 1,

    width: wp('90%'),
  },
});
