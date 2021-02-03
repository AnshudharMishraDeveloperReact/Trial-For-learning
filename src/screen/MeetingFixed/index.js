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
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import {ImageBackground} from 'react-native';
const {height, width} = Dimensions.get('window');
import Signupinput from "../../component/textInput/Signupinput"

const ExpandableComponent = ({item, onClickFunction, navigation}) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

 

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>{item.category_name}</Text>

        <View style={styles.separator1} />
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
            <Text style={styles.text}>
              {key}. {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const App = ({navigation}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  const simpleAlertHandler = () => {
    //function to make simple alert
    alert('Meeting Details are sucessfully save.');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex: 1}}>
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
              navigation.navigate('LeadsDetails');
            }}>
            <Image
              source={require('../../assests/list.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
          <View
            style={{
              width: wp('80%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: hp('3%'),
                fontWeight: 'bold',
              }}>
              {'11000'}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView>
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

            <Text style={styles.text}>{'Calendar'}</Text>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={new Date(1980, 1, 1)}
              maxDate={new Date(2099, 6, 3)}
              weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
              months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="red"
              selectedDayColor="#66ff33"
              selectedDayTextColor="#000000"
              scaleFactor={375}
              textStyle={{
                fontFamily: 'Cochin',
                color: '#000000',
              }}
              onDateChange={onDateChange}
            />
               <View
    
             style={{flexDirection: 'row',alignItems:"center",justifyContent:"center", marginTop:hp("2%")}}>
              <View
               style={styles.green}>
                <Text style={styles.textStyle}>Meeting Time : </Text>
              </View>

              <TextInput
              style={styles.input}
               placeholder="Time...."
               placeholderTextColor = "grey"
               autoCapitalize = "none"
             
               maxLength={30}
          />
 
            </View>
            <View style={{
                alignItems:"center",
                justifyContent:"center"
            }}>
            <TouchableOpacity 
              onPress={simpleAlertHandler}
            style={{
              width:wp("20%"),
              height: hp("5%"),
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:"#00acee",
              borderRadius:wp("2%"),
              marginTop:hp("2%"),
              shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
            }}>
            <Text style={{
              color:"#fff",
              fontSize:hp("2.5%")
            }}>
             Save
            </Text>
            </TouchableOpacity>
            </View>
            <View
              style={{
                height: hp('15%'),
              }}></View>
          </ScrollView>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
    width: wp('5%'),
    height: hp('4.5%'),
    marginTop:hp("0.5%")
  },
  separator: {
    height: 0.5,
    backgroundColor: 'green',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  modalView: {
    backgroundColor: '#fff',

    width: '55%',
    height: '90%',
    borderColor: '#000',
    borderWidth: wp('0.5%'),
    // borderBottomRightRadius:wp("4%"),
    // borderTopRightRadius:wp("4%")
  },
  modalText: {
    marginTop: hp('1.5%'),
    marginLeft: wp('-3%'),
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  modalText1: {
    marginLeft: wp('-3%'),
    fontSize: hp('2.3%'),
  },
  modalText2: {
    marginLeft: wp('3%'),
    fontSize: hp('2.5%'),
    marginTop: hp('0.5%'),
  },
  separator1: {
    height: 0.5,
    backgroundColor: 'green',
    width: '95%',
    margin: wp('2%'),
  },
  text: {
    fontSize: 18,
    color: 'green',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
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
    marginTop: hp('1%'),
    fontWeight: 'bold',
  },
  input: {
   
    height:hp('6%'),
    fontSize:hp('2.5%'),
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft:wp('2%'),
    width:wp('40%'),
    borderRadius:wp("2%"),
    marginTop:hp("-1%"),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor:'#fff'
   
  
 }
});



