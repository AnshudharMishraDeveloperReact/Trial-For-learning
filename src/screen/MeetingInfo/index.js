import React, {useEffect, useState} from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
  Modal,
  TouchableHighlight,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import Signupinput from '../../component/textInput/Signupinput';
import DatePicker from 'react-native-datepicker';
import {ImageBackground} from 'react-native';
const {height, width} = Dimensions.get('window');

const App = ({navigation}) => {
  const [date, setDate] = useState('');

  const simpleAlertHandler = () => {
    //function to make simple alert
    alert('Meeting Details are sucessfully save.');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assests/bg.jpg')}
        style={{
          width: wp('100%'),
          height: hp('100%'),
        }}>
        <View
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            width: wp('100%'),
            height: hp('8%'),
            backgroundColor: '#00acee',
            flexDirection: 'row',
            padding: wp('3%'),
          }}>
         <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeDrawer');
              }}
              style={{
                marginLeft: wp('5%'),
                marginTop:hp("0.5%")
                
              }}>
              <Image
                source={require('../../assests/list.png')}
                resizeMode="contain"
                style={{
                  width: wp('7%'),
                  height: hp('4%'),
                }}
              />
            </TouchableOpacity>
          <View
            style={{
              width: wp('70%'),
              alignItems:"center",
              justifyContent:"center"
            
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: hp('3%'),
                fontWeight: 'bold',
              }}>
              {'Meeting Info'}
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>
              {'The brief information of the meeting.'}
            </Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.contain}>
                <Text style={styles.textStyle1}>Location :-</Text>
                <View style={{flexDirection: 'row', paddingLeft: wp('10%')}}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Client Place...." />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('10%'),
                    marginTop: hp('2%'),
                  }}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Client Office...." />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('10%'),
                    marginTop: hp('2%'),
                  }}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Our Office....." />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('10%'),
                    marginTop: hp('2%'),
                  }}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Others...." />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('10%'),
                    marginTop: hp('2%'),
                  }}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Time...." />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('11%'),
                    marginTop: hp('3%'),
                  }}>
                  <View style={styles.green}>
                    <Text style={styles.textStyle}>Date </Text>
                  </View>
                  <View style={styles.yellow}>
                    <Text style={styles.textStyle5}>{':'}</Text>
                  </View>
                  <View style={styles.red}>
                    <View style={styles.container}>
                      <DatePicker
                        style={styles.datePickerStyle}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2099"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        placeholderTextColor="#000"
                        customStyles={{
                          dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: wp('-8%'),
                          
                          },
                          dateInput: {
                            marginLeft: wp('1%'),
                            marginTop: hp('0%'),
                            borderColor:"#fff"
                          },
                        }}
                        onDateChange={(date) => {
                          setDate(date);
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: wp('10%'),
                    marginTop: hp('0%'),
                  }}>
                  <View style={styles.red}>
                    <Signupinput placeholder="Address...." />
                  </View>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                  onPress={simpleAlertHandler}
                   style={styles.button}>
                    <Text style={styles.buttontext}>Save</Text>
                  </TouchableOpacity>
                </View>
                <View style={{height: hp('2%')}}></View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: wp('38%'),
    height: hp('6%'),
    marginTop: hp('-1%'),
    borderRadius: wp('2%'),
    backgroundColor:"#fff",
    overflow: "hidden",
    alignItems:"center",
    justifyContent:"center",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderColor:"#000",
    borderWidth:wp("0.2%")
  },
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    backgroundColor: '#EAEDED',

    padding: hp('2%'),
    width: wp('85%'),
    borderRadius: wp('5%'),
    borderColor: '#FC671C',
    borderWidth: wp('0.2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  red: {
    width: wp('50%'),
    height: hp('6%'),
  },
  yellow: {
    width: wp('5%'),
    height: hp('6%'),
  },
  green: {
    width: wp('10%'),
    height: hp('6%'),
  },

  button: {
    height: hp('6%'),
    fontSize: hp('2.5%'),
    borderColor: '#00acee',
    borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: wp('2%'),
    width: wp('60%'),
    backgroundColor: '#00acee',
    marginTop: hp('2.5%'),
    marginLeft: hp('1%'),
  },
  buttontext: {
    fontSize: hp('3%'),
    color: '#fff',
  },
  header: {
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  image: {
    width: '8%',
    height: hp('6%'),
  },

  text: {
    fontSize: 20,
    color: '#000',
    padding: 10,
  },

  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00acee',
    marginTop:hp("1%")
  },
  textStyle5: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00acee',
    marginTop:hp("1%")
  },

  textStyle1: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: wp('4%'),
  },
});
