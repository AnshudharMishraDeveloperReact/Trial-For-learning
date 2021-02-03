// // Searching using Search Bar Filter in React Native List View
// // https://aboutreact.com/react-native-search-bar-filter-on-listview/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList
// } from 'react-native';
// import {SearchBar} from 'react-native-elements';

// const App = () => {
//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({item}) => {
//     return (
//       // Flat List Item
//       <Text
//         style={styles.itemStyle}
//         onPress={() => getItem(item)}>
//           {item.id}
//           {'.'}
//           {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//       />
//     );
//   };

//   const getItem = (item) => {
//     // Function for click on an item
//     alert('Id : ' + item.id + ' Title : ' + item.title);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <SearchBar
//           round
//           searchIcon={{size: 24}}
//           onChangeText={(text) => searchFilterFunction(text)}
//           onClear={(text) => searchFilterFunction('')}
//           placeholder="Type Here..."
//           value={search}
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });

// export default App;

// import React, {Component} from 'react';
// import {Text, View,Button} from 'react-native';
// import { Picker } from '@react-native-picker/picker'

// export default class index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       PickerValue: '',
//     };
//   }

//   clickme = () => {
//     alert(this.state.PickerValue);
//   };
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContnet: 'center',
//           alignItem: 'center',
//         }}>
//         <Picker
//           style={{
//             width: '80%',
//           }}
//           selectedValue={this.state.PickerValue}
//           onValueChange={(itemValue, itemIndex) =>
//             this.setState({
//               PickerValue: itemValue,
//             })
//           }>
//           <Picker.Item label="manager" value="manager list" />
//           <Picker.Item label="executive" value="executive caller" />
//         </Picker>

//         <Button title="Click" onPress={this.clickme} />
//       </View>
//     );
//   }
// }

// import React, {useState} from 'react';

// //import all the components we are going to use
// import {
//   Picker,
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet
// } from 'react-native';

// const App = () => {
//   const [choosenLabel, setChoosenLabel] = useState('Native');
//   const [choosenIndex, setChoosenIndex] = useState('2');

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         {/*Picker with multiple chose to choose*/}
//         {/*selectedValue to set the preselected value if any*/}
//         {/*onValueChange will help to handle the changes*/}
//         <Picker
//           selectedValue={choosenLabel}
//           onValueChange={(itemValue, itemIndex) => {
//             setChoosenLabel(itemValue);
//             setChoosenIndex(itemIndex);
//           }}>
//           <Picker.Item label="Hello" value="Hello" />
//           <Picker.Item label="React" value="React" />
//           <Picker.Item label="Native" value="Native" />
//           <Picker.Item label="How" value="How" />
//           <Picker.Item label="are" value="are" />
//           <Picker.Item label="you" value="you" />
//         </Picker>
//         {/*Text to show selected picker value*/}
//         <Text style={styles.text}>
//           Selected Value: {choosenLabel}
//         </Text>
//         {/*Text to show selected index */}
//         <Text style={styles.text}>
//           Selected Index: {choosenIndex}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   text: {
//     fontSize: 20,
//     alignSelf: 'center',
//   },
// });

// export default App;

// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class index extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// // import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// //import CalendarPicker from the package we installed
// import CalendarPicker from 'react-native-calendar-picker';

// const App = () => {
//   const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);

//   const onDateChange = (date, type) => {
//     //function to handle the date change
//     if (type === 'END_DATE') {
//       setSelectedEndDate(date);
//     } else {
//       setSelectedEndDate(null);
//       setSelectedStartDate(date);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>

//         <CalendarPicker
//           startFromMonday={true}
//           allowRangeSelection={true}
//           minDate={new Date(1980, 1, 1)}
//           maxDate={new Date(2099, 6, 3)}
//           weekdays={
//             [
//               'Mon',
//               'Tue',
//               'Wed',
//               'Thur',
//               'Fri',
//               'Sat',
//               'Sun'
//             ]}
//           months={[
//             'January',
//             'Febraury',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//           ]}
//           previousTitle="Previous"
//           nextTitle="Next"
//           todayBackgroundColor="#e6ffe6"
//           selectedDayColor="#66ff33"
//           selectedDayTextColor="#000000"
//           scaleFactor={375}
//           textStyle={{
//             fontFamily: 'Cochin',
//             color: '#000000',
//           }}
//           onDateChange={onDateChange}
//         />
//         <View style={styles.textStyle}>
//           <Text style={styles.textStyle}>
//             Selected Start Date :
//           </Text>
//           <Text style={styles.textStyle}>
//             {selectedStartDate ? selectedStartDate.toString() : ''}
//           </Text>
//           <Text style={styles.textStyle}>
//             Selected End Date :
//           </Text>
//           <Text style={styles.textStyle}>
//             {selectedEndDate ? selectedEndDate.toString() : ''}
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
//   textStyle: {
//     marginTop: 10,
//   },
//   titleStyle: {
//     textAlign: 'center',
//     fontSize: 20,
//     margin: 20,
//   },
// });

// import React from 'react';
// import { Share, View, Button } from 'react-native';

// const App = () => {
//   const onShare = async () => {
//     try {
//       const result = await Share.share({
//        title: 'App link',
//   message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
//   url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   return (
//     <View style={{ marginTop: 50 }}>
//       <Button onPress={onShare} title="Share" />
//     </View>
//   );
// };

// export default App;

// import React, {useState} from 'react';
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
//   Image,
// } from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <TouchableHighlight
//               style={{
//                 alignItems: 'flex-end',
//                 padding: 15,
//               }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}>
//               <Image
//                 source={require('../../assests/close.png')}
//                 resizeMode="contain"
//                 style={{width: 20, height: 20}}
//               />
//             </TouchableHighlight>
//             <Text style={styles.modalText}>Hello World!</Text>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         onPress={() => {
//           setModalVisible(true);
//         }}>
//         <Image
//           source={require('../../assests/list.png')}
//           resizeMode="contain"
//           style={{width: 20, height: 20}}
//         />
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   modalView: {
//     backgroundColor: 'white',

//     width: '50%',
//     height: '80%',

//     shadowColor: '#00ACEE',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;


// import React, {createRef,useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableHighlight,
//   TouchableOpacity
// } from 'react-native';

// import SignatureCapture from 'react-native-signature-capture';

// const App = ({navigation}) => {
//   const [userName, setUserName] = useState('');
//   const [DesignedImage, setDesignedImage] = useState("");
//   const sign = createRef();

//   const saveSign = () => {
//     sign.current.saveImage();
//   };

//   const resetSign = () => {
//     sign.current.resetImage();
//   };

//   const _onSaveEvent = (result) => {
//     //result.encoded - for the base64 encoded png
//     //result.pathName - for the file path name
//     alert('Signature Captured Successfully');
//     console.log(result.encoded);
//   };

//   const _onDragEvent = () => {
//     // This callback will be called when the user enters signature
//     console.log('dragged');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleStyle}>
//         Draw Here
//         </Text>
//         <SignatureCapture
//           style={styles.signature}
//           ref={sign}
//           onSaveEvent={_onSaveEvent}
//           onDragEvent={_onDragEvent}
//           showNativeButtons={false}
//           showTitleLabel={false}
//           viewMode={'portrait'}
//           onChangeText={(image) => setDesignedImage(image)}
//           value={DesignedImage}
//         />
//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={()=>{navigation.navigate('Demo', {
//               paramKey: DesignedImage,
//             })}}>
//             <Text>Save</Text>
//           </TouchableOpacity>
//           <TouchableHighlight
//             style={styles.buttonStyle}
//             onPress={() => {
//               resetSign();
//             }}>
//             <Text>Reset</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   titleStyle: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   signature: {
//     flex: 1,
//     borderColor: '#000033',
//     borderWidth: 1,
//   },
//   buttonStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 50,
//     backgroundColor: '#eeeeee',
//     margin: 10,
//   },
// });

// var React = require('react');
// var ReactNative = require('react-native');
 
// var {Component} = React;
 
// var {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View, TouchableHighlight
// } = ReactNative;
 
// import SignatureCapture from 'react-native-signature-capture';
 
// class RNSignatureExample extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, flexDirection: "column" }}>
//                 <Text style={{alignItems:"center",justifyContent:"center"}}>Signature Capture Extended </Text>
//                 <SignatureCapture
//                     style={[{flex:1},styles.signature]}
//                     ref="sign"
//                     onSaveEvent={this._onSaveEvent}
//                     onDragEvent={this._onDragEvent}
//                     saveImageFileInExtStorage={false}
//                     showNativeButtons={false}
//                     showTitleLabel={false}
//                     viewMode={"portrait"}/>
 
//                 <View style={{ flex: 1, flexDirection: "row" }}>
//                     <TouchableHighlight style={styles.buttonStyle}
//                         onPress={() => { this.saveSign() } } >
//                         <Text>Save</Text>
//                     </TouchableHighlight>
 
//                     <TouchableHighlight style={styles.buttonStyle}
//                         onPress={() => { this.resetSign() } } >
//                         <Text>Reset</Text>
//                     </TouchableHighlight>
 
//                 </View>
 
//             </View>
//         );
//     }
 
//     saveSign() {
//         this.refs["sign"].saveImage();
//     }
 
//     resetSign() {
//         this.refs["sign"].resetImage();
//     }
 
//     _onSaveEvent(result) {
//         //result.encoded - for the base64 encoded png
//         //result.pathName - for the file path name
//         console.log(result);
//     }
//     _onDragEvent() {
//          // This callback will be called when the user enters signature
//         console.log("dragged");
//     }
// }
 
// const styles = StyleSheet.create({
//     signature: {
//         flex: 1,
//         borderColor: '#000033',
//         borderWidth: 1,
//     },
//     buttonStyle: {
//         flex: 1, justifyContent: "center", alignItems: "center", height: 50,
//         backgroundColor: "#eeeeee",
//         margin: 10
//     }
// });

// export default RNSignatureExample;

// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// //import DatePicker from the package we installed
// import DatePicker from 'react-native-datepicker';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//   } from 'react-native-responsive-screen';

// const App = () => {
//   const [date, setDate] = useState('29-12-2020');

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <DatePicker
//           style={styles.datePickerStyle}
//           date={date} // Initial date from state
//           mode="date" // The enum of date, datetime and time
//           placeholder="select date"
//           format="DD-MM-YYYY"
//           minDate="01-01-2016"
//           maxDate="01-01-2099"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               //display: 'none',
//               position: 'absolute',
//               left: 0,
//               top: 4,
//               marginLeft: 0,
//             },
//             dateInput: {
//               marginLeft:wp("10%"),
//             },
//           }}
//           onDateChange={(date) => {
//             setDate(date);
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//   },
//   datePickerStyle: {
//     width:wp ("40%"),
//     marginTop: 20,
//   },
// });

// export default App;

// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Button,
// } from 'react-native';

// //import all the components we are going to use.
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [
//     currentLongitude,
//     setCurrentLongitude
//   ] = useState('...');
//   const [
//     currentLatitude,
//     setCurrentLatitude
//   ] = useState('...');
//   const [
//     locationStatus,
//     setLocationStatus
//   ] = useState('');

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'ios') {
//         getOneTimeLocation();
//         subscribeLocationLocation();
//       } else {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//               title: 'Location Access Required',
//               message: 'This App needs to Access your location',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //To Check, If Permission is granted
//             getOneTimeLocation();
//             subscribeLocationLocation();
//           } else {
//             setLocationStatus('Permission Denied');
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       }
//     };
//     requestLocationPermission();
//     return () => {
//       Geolocation.clearWatch(watchID);
//     };
//   }, []);

//   const getOneTimeLocation = () => {
//     setLocationStatus('Getting Location ...');
//     Geolocation.getCurrentPosition(
//       //Will give you the current location
//       (position) => {
//         setLocationStatus('You are Here');

//         //getting the Longitude from the location json
//         const currentLongitude = 
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);
        
//         //Setting Longitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         timeout: 30000,
//         maximumAge: 1000
//       },
//     );
//   };

//   const subscribeLocationLocation = () => {
//     watchID = Geolocation.watchPosition(
//       (position) => {
//         //Will give you the location on location change
        
//         setLocationStatus('You are Here');
//         console.log(position);

//         //getting the Longitude from the location json        
//         const currentLongitude =
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);

//         //Setting Latitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         maximumAge: 1000
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
//             }}
//             style={{width: 100, height: 100}}
//           />
//           <Text style={styles.boldText}>
//             {locationStatus}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Longitude: {currentLongitude}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Latitude: {currentLatitude}
//           </Text>
//           <View style={{marginTop: 20}}>
//             <Button
//               title="Button"
//               onPress={getOneTimeLocation}
//             />
//           </View>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//         Geolocation
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.anshu.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//   },
// });

// export default App;

// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {SafeAreaView, StyleSheet, View, Text,Dimensions} from 'react-native';
// const { height, width } = Dimensions.get('window');

// const App = () => {
//   const [currentDate, setCurrentDate] = useState(setCurrentDate);

//   useEffect(() => {
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     setCurrentDate(
//       date + '/' + month + '/' + year 
//       + ' ' + hours + ':' + min + ':' + sec
//     );
//   }, []);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Text style={styles.textStyle}>
//             Current Date Time
//           </Text>
//           <Text style={styles.textStyle}>
//             {currentDate}
//           </Text>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//         Current Date Time
//         </Text>
       
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: 'black',
//   },
// });

// export default App;

// React Native Fetch – To make HTTP API call in React Native
// https://aboutreact.com/react-native-http-networking/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  const getDataUsingGet = () => {
    //GET request
    fetch('https://api.first.org/data/v1/countries', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const getDataUsingPost = () => {
    //POST json
    var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          {/*Running GET Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={styles.textStyle}>
              Get Data Using GET
            </Text>
          </TouchableOpacity>
          {/*Running POST Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingPost}>
            <Text style={styles.textStyle}>
              Get Data Using POST
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Fetch
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
});

export default App;