

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const App = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assests/bg.jpg')}
        style={{
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <View style={styles.container}>
          <View
            style={{
              width: wp('100%'),
              height: hp('35%'),
              backgroundColor: '#00a8ff',
              borderBottomLeftRadius: wp('5%'),
              borderBottomRightRadius: wp('5%'),
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeDrawer');
              }}
              style={{
                marginLeft: wp('5%'),
                marginTop: hp('-25%'),
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
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: hp('-25%'),
                marginLeft: wp('30%'),
                fontSize: hp('3.5%'),
                color: '#fff',
              }}>
              Profile
            </Text>
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
                  source={require('../../assests/group.png')}
                  style={{
                    width: wp('28%'),
                    height: hp('12%'),
                    marginTop: hp('-6%'),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginTop: hp('1.5%'),
                    fontSize: hp('3%'),
                    color: '#000',
                  }}>
                  User's Name
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('35%'),
                    height: hp('10%'),
                  }}>
                  <Image
                    source={require('../../assests/optimization.png')}
                    style={{
                      width: wp('6%'),
                      height: hp('5%'),
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginLeft: wp('2%'),
                      marginTop: hp('1%'),
                      fontSize: hp('2%'),
                      color: '#000',
                    }}>
                    Sales Executive
                  </Text>
                </View>

            
                <ScrollView
                  style={{
                    width: wp('90%'),
                    height: hp('46%'),
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Name</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>:  abc</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                  
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Phone No</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>:  998455****</Text>
                      </View>
                    </View>
                  
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Email</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>:  abc@gmail.com</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Address</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: xyz,sector 63,Noida</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Source</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: Executive</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Designation/Department</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: Executive</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Company</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: xyz</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Project</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: abc</Text>
                      </View>
                    </View>
                    <View style={styles.separate}></View>
                    <View style={styles.con}>
                      <View style={styles.sep1}>
                        <Text style={styles.textdraw}>Product</Text>
                      </View>
                      <View style={styles.sep2}>
                        <Text style={styles.textdraw1}>: Off-Field</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  introTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  introTextStyle1: {
    color: '#fff',
    fontSize: hp('3%'),
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  introTitleStyle1: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerStyles: {
    width: wp('100%'),
    height: '8%',
    backgroundColor: '#00acee',
    paddingLeft: wp('5%'),
    paddingTop: hp('3%'),
  },
  subconatiner1: {
    backgroundColor: '#ffff',
    borderRadius: wp('1.5%'),
    height: hp('8%'),
    borderBottomWidth: wp('0.8%'),
    borderBottomColor: 'grey',
    borderRightWidth: wp('0.4%'),
    borderRightColor: 'grey',
    flexDirection: 'row',
  },
  sub1: {
    backgroundColor: '#ffff',
    borderRadius: wp('1.5%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('20%'),

    paddingTop: hp('1%'),
  },
  sub2: {
    borderRadius: wp('1.5%'),
    height: hp('7%'),
    padding: wp('4%'),
    width: wp('60%'),
  },
  text1: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  imagein: {
    width: wp('8%'),
    height: hp('4%'),
  },
  headerStyles1: {
    width: wp('100%'),
    height: hp('8%'),
    backgroundColor: '#00acee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: hp('24%'),
    width: wp('85%'),
    backgroundColor: '#fff',
    borderRadius: wp('2.5%'),
    padding: wp('5%'),
    zIndex: 2,
    opacity: 1,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  seprator: {
    color: 'grey',
    marginTop: hp('-5%'),
  },
  seprator1: {
    color: 'grey',
    marginTop: hp('-2%'),
  },
  modalText: {
    fontSize: hp('3%'),
    textAlign: 'center',
  },
  sep1: {
    width: wp('30%'),
    height: hp('7%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  sep2: {
    width: wp('50%'),
    height: hp('7%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: wp('4%'),
  },
  con: {
    width: wp('70%'),
    height: hp('7%'),
    flexDirection: 'row',
  },
  textdraw: {
    fontSize: hp('2.5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  textdraw1: {
    fontSize: hp('2%'),
    color: '#000',
  },
  imagenext: {
    width: wp('5%'),
    height: hp('3.5%'),
  },
  separate: {
    borderBottomColor: '#000',
    width: hp('40%'),
    borderBottomWidth: wp('0.2%'),
  },
});
