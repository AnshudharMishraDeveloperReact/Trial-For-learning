import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Share,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Checkbox from '../../component/Checkbox/index';
const {height, width} = Dimensions.get('window');
import {Picker} from '@react-native-picker/picker';
import DropdownMenu from 'react-native-dropdown-menu';
import Communications from 'react-native-communications';
import {LogBox} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url:
          'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  render() {
    var data = [
      [
        'Did Not Pick',
        'Meeting Fixed',
        'Meeting Reschedule',
        'Leads Converted',
      ],
    ];
    return (
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          source={require('../../assests/bg.jpg')}
          style={{
            width: wp('100%'),
            height: hp('100%'),
          }}>
          <View
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
                marginTop: hp('0.5%'),
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
                width: wp('75%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: hp('3%'),
                  fontWeight: 'bold',
                }}>
                {'110000'}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp('95%'),
                backgroundColor: '#fff',
                marginTop: hp('4%'),
                borderRadius: wp('5%'),
                borderColor: '#000',
                borderWidth: wp('0.2%'),
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <View
                style={{
                  marginTop: hp('2%'),
                }}>
                <View style={styles.maincontainer}>
                  <View style={styles.box1}>
                    <Text style={styles.font}>Name:</Text>
                  </View>
                  <View style={styles.box2}>
                    <Text style={styles.font1}>xyz</Text>
                  </View>
                </View>
              </View>
              <View style={styles.maincontainer}>
                <View style={styles.box1}>
                  <Text style={styles.font}>For:</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.font1}>Website</Text>
                </View>
              </View>
              <View style={styles.maincontainer}>
                <View style={styles.box1}>
                  <Text style={styles.font}>Email:</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.font1}>abc123@gmail.com</Text>
                </View>
              </View>
              <View style={styles.maincontainer}>
                <View style={styles.box1}>
                  <Text style={styles.font}>Budget:</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.font1}>Not mentioned</Text>
                </View>
              </View>
              <View style={styles.maincontainer}>
                <View style={styles.box1}>
                  <Text style={styles.font}>Phone:</Text>
                </View>
                <View style={styles.box2}>
                  <Text style={styles.font1}>999984****</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: wp('92%'),
                height: hp('8%'),
                borderColor: '#000',
                borderWidth: wp('0.2%'),
                borderRadius: wp('5%'),
                flexDirection: 'row',
                marginVertical: hp('2%'),
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <View style={styles.grid}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.buttonStyle}
                  onPress={() => Communications.phonecall('01204380777', true)}>
                  <Text style={styles.gridtext}>Call</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  height: hp('7.8%'),
                  width: wp('0.4%'),
                  marginLeft: wp('2%'),
                  backgroundColor: '#000',
                }}
              />
              <View style={styles.grid1}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('MeetingFixed');
                  }}>
                  <Text style={styles.gridtext}>Leads Status</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: hp('7.8%'),
                  width: wp('0.4%'),
                  marginLeft: wp('-1%'),
                  backgroundColor: '#000',
                }}
              />
              <View style={styles.grid}>
                <TouchableOpacity onPress={() => this.onShare()}>
                  <Text style={styles.gridtext}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <DropdownMenu
            style={{flex: 0.5}}
            bgColor={'#fff'}
            tintColor={'#000000'}
            activityTintColor={'green'}
            handler={(selection, row) =>
              this.setState({text: data[selection][row]})
            }
            data={data}></DropdownMenu>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom:hp("4%")
              
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Demo');
              }}
              style={{
                width: wp('30%'),
                height: hp('5%'),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#00acee',
                borderRadius: wp('2%'),
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: hp('2.5%'),
                }}>
                Send Details
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: wp('5%'),
    height: hp('4.5%'),
  },
  green: {
    width: wp('40%'),
    height: hp('6%'),
  },
  red: {
    width: wp('40%'),
    height: hp('6%'),
  },

  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('-2%'),
  },
  box1: {
    width: wp('40%'),
    height: hp('8%'),

    justifyContent: 'center',
    paddingLeft: wp('4%'),
  },
  box2: {
    width: wp('52%'),
    height: hp('8%'),

    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: wp('2%'),
  },
  font: {
    fontSize: hp('2.5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  font1: {
    fontSize: hp('2.5%'),
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('7%'),
  },
  grid1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('6%'),
  },
  gridtext: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
  input: {
    fontSize: hp('2.5%'),
    marginLeft: wp('5%'),
    fontWeight: 'bold',
    color: '#fff',
  },
});
