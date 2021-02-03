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
  Dimensions
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import { ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');

const ExpandableComponent = ({item, onClickFunction,navigation}) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);
  

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
     <ImageBackground
     source={require("../../assests/bg.jpg")}
     style={{
       width:wp("100%"),
       height:hp("100%")
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
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: hp('3%'),
                fontWeight: 'bold',
               
              }}>
              {'Leads'}
            </Text>
          </View>
        </View>
      <View style={styles.container}>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              style={{fontSize: 42, color: 'red'}}
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}

          <View style={{
            alignItems:"center",
            justifyContent:"center"
          }}>
          <View style={{
            width:wp("95%"),
            height:hp("68%"),
            backgroundColor:"#fff",
            borderRadius: wp('5%'),
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
            backgroundColor:"#fff",
            paddingTop:hp("2%")

          }}>
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
          <View style={styles.textStyle}>
            <Text style={styles.textStyle}>Selected Start Date :</Text>
            <Text style={styles.textStyle1}>
              {selectedStartDate ? selectedStartDate.toString() : ''}
            </Text>
            <Text style={styles.textStyle}>Selected End Date :</Text>
            <Text style={styles.textStyle1}>
              {selectedEndDate ? selectedEndDate.toString() : ''}
            </Text>
          </View>
          </View>
          </View>
        </ScrollView>
      </View>
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
  header: {
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width:wp("5%"),
    height: hp('4.5%'),
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
    borderColor:"#000",
    borderWidth:wp("0.5%"),
    // borderBottomRightRadius:wp("4%"),
    // borderTopRightRadius:wp("4%")

  
    
   
  },
  modalText: {
     marginTop:hp("1.5%"),
    marginLeft:wp("-3%"),
    fontSize:hp("3%"),
    fontWeight:"bold"
  },
  modalText1: {
 
   marginLeft:wp("-3%"),
   fontSize:hp("2.3%"),
  
 },
 modalText2: {
 
  marginLeft:wp("3%"),
  fontSize:hp("2.5%"),
  marginTop:hp("0.5%"),
 
},
  separator1: {
    height: 0.5,
    backgroundColor: 'green',
    width: '95%',
    margin: wp('2%'),
  },
  text: {
    fontSize: 14,
    color:'#000',
    padding: 5,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    marginLeft:wp("2%"),
    marginTop:hp("1%"),
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle1: {
    marginLeft:wp("2%"),
  },
  textStyle2: {
    marginLeft:wp("2%"),
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Un-Assigned Leads',
    subcategory: [{val: 'Yet to Start'}, {val: 'Wip'}, {val: 'Closed'}],
  },
  {
    isExpanded: false,
    category_name: 'Assigned Leads',
    subcategory: [{val: 'Yet to Start'}, {val: 'Wip'}, {val: 'Closed'}],
  },
];
