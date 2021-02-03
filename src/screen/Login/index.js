import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../component/textInput/Input';
import Passwordinput from '../../component/textInput/Passwordinput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ImageBackground} from 'react-native';

export default class Login extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      email: '',
      emailstatus: false,
      password: '',
      passwordstatus: false,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 6000);
  }

  validEmail(value) {
    // alert{'nxcbjh'};
    this.setState({email: value});
    this.state.emailError = this.validateEmail(value).error;
    this.state.emailstatus = this.validateEmail(value).status;
  }

  validPassword(value) {
    this.setState({password: value});
    this.state.passwordError = this.validatePassword(value).error;
    this.state.passwordstatus = this.validatePassword(value).status;
  }

  validateEmail(email) {
    // console.warn('hello');
    var emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    email = email.trim();
    if (email == '' || email == undefined || email == null) {
      return {status: false, error: 'Please enter Email ID.'};
    } else if (!emailRegex.test(email)) {
      return {status: false, error: 'Please enter valid Email Address.'};
    } else {
      return {status: true, error: '', height: 0};
    }
  }
  validatePassword(password) {
    // alert('typing in  password field ')
    var passwordRegex = /^(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    password = password.trim();

    if (password == '' || password == undefined || password == null) {
      return {status: false, error: 'Please enter password.'};
    } else if (!passwordRegex.test(password)) {
      return {status: false, error: 'Please enter valid password.'};
    } else if (password.length < 6) {
      return {
        status: false,
        error: 'Password must contain 6 or more than 6 characters.',
      };
    } else {
      return {status: true, error: '', height: 0};
    }
  }

  validateall = () => {
    if (this.state.emailstatus) {
      if (this.state.passwordstatus) {
        // this.saveData();
        // // else { this.forgetUser(); }
        // alert("SignUp Successful")

        // this.displayData();
        this.props.navigation.navigate('HomeDrawer');
      } else {
        this.setState({passwordError: 'Please enter password.'});
      }
    } else {
      this.setState({emailError: 'Please enter email.'});
    }
  };

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('../../assests/unnamed.png')}
            style={{
              width: wp('120%'),
              height: hp('110%'),
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.MainContainer}>
        <ImageBackground
          source={require('../../assests/bg.jpg')}
          style={{
            height: hp('100%'),
            width: wp('100%'),
          }}>
          <StatusBar backgroundColor="#00a8ff" barStyle="light-content" />
          <View
            style={{
              width: wp('100%'),
              height: hp('35%'),
              backgroundColor: '#00a8ff',
              borderBottomLeftRadius: wp('5%'),
              borderBottomRightRadius: wp('5%'),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('3.5%'),
                color: '#fff',
                fontWeight: 'bold',
                marginTop: hp('2%'),
              }}>
              LOGIN
            </Text>
            <TouchableOpacity
              onPress={() => this.validateall()}
              style={{
                marginLeft: wp('85%'),
                marginTop: hp('-4%'),
              }}>
              <Image
                source={require('../../assests/play.png')}
                resizeMode="contain"
                style={{
                  width: wp('7%'),
                  height: hp('4%'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp('90%'),
                height: hp('70%'),
                backgroundColor: '#fff',
                marginTop: hp('-20%'),
                borderRadius: wp('5%'),
                borderWidth: wp('0.5%'),
                borderColor: 'grey',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assests/intellileads.png')}
                  style={{
                    width: wp('55%'),
                    height: hp('35%'),
                    marginTop: hp('-5%'),
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  marginTop: hp('-4%'),
                }}>
                <Text style={styles.userpass}>Username :-</Text>
                <Input
                  placeholder="Enter Your UserName"
                  value={this.state.email}
                  onChangeText={(value) => this.validEmail(value)}
                />

                <Text
                  style={{
                    color: 'red',
                    marginLeft: wp('6%'),
                    fontSize: hp('2%'),
                  }}>
                  {this.state.emailError}
                </Text>

                <Text style={styles.userpass1}>Password :-</Text>
                <Passwordinput
                  placeholder="Enter Your Password"
                  value={this.state.password}
                  onChangeText={(value) => this.validPassword(value)}
                />
                <Text
                  style={{
                    color: 'red',
                    marginLeft: wp('6%'),
                    fontSize: hp('2%'),
                  }}>
                  {this.state.passwordError}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.validateall()}
              style={{
                marginHorizontal: hp('2%'),
                marginTop: hp('-12%'),
                height: hp('7%'),
                fontSize: hp('2.5%'),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: wp('5%'),
                width: wp('40%'),
                backgroundColor: '#00acee',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <Text
                style={{
                  fontSize: hp('3%'),
                  color: '#fff',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {this.state.isVisible === true ? Splash_Screen : null}
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: hp('10%'),
    position: 'absolute',
    width: wp('100%'),
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    paddingTop: hp('2%'),
    fontSize: hp('2.5%'),
    paddingLeft: wp('10%'),

    width: wp('80%'),
  },
  text: {
    fontSize: hp('2.5%'),
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: wp('22%'),
  },
  bottom: {
    height: hp('10%'),
    flexDirection: 'row',
    width: wp('80%'),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  img1: {
    width: wp('14%'),
    height: hp('10%'),
  },
  img2: {
    width: wp('14%'),
    height: hp('10%'),
  },

  userpass: {
    fontSize: hp('2.5%'),
    color: '#00acee',
    fontWeight: 'bold',
    marginLeft: wp('7%'),
  },
  userpass1: {
    fontSize: hp('2.5%'),
    color: '#00acee',
    fontWeight: 'bold',
    marginLeft: wp('7%'),
    marginTop: hp('-0.7%'),
  },
});
