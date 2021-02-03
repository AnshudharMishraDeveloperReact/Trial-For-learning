import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {CheckBox, Body, Title, Subtitle, Button} from 'native-base';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
import {Picker} from '@react-native-picker/picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
      users: [],
      deletionArray: [],
      allSelected: false,
    };
  }

  componentDidMount() {
    var data = [
      {
        name: '110001',
        product: 'WebApp',
        description: 'abc.',
        to: 'tuw',
      },
      {
        name: '110002',
        product: 'Website',
        description: 'def.',
        to: 'mnc',
      },
      {
        name: '110003',
        product: 'Website',
        description: 'ghk.',
        to: 'zyq',
      },
      {
        name: '110004',
        product: 'Application',
        description: 'akg.',
        to: 'bcd',
      },
      {
        name: '110005',
        product: 'WebApp',
        description: 'psit.',
        to: 'klm',
      },
      {
        name: '110006',
        product: 'Application',
        description: 'mnc.',
        to: 'zyc',
      },
      {
        name: '110007',
        product: 'WebApp',
        description: 'mnc.',
        to: 'zyc',
      },
      {
        name: '110008',
        product: 'Application',
        description: 'mnc.',
        to: 'zyc',
      },
      {
        name: '110009',
        product: 'Website',
        description: 'mnc.',
        to: 'zyc',
      },
      {
        name: '110010',
        product: 'WebApp',
        description: 'mnc.',
        to: 'zyc',
      },
      {
        name: '110011',
        product: 'Application',
        description: 'mnc.',
        to: 'zyc',
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
      users: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.product.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}} />
    );
  };

  selectAll() {
    let helperArray = [];
    for (let index = 0; index < this.state.users.length; index++) {
      if (!this.state.allSelected) {
        helperArray.push(index);
      } else if (this.state.allSelected) {
        helperArray = [];
      }
    }
    this.setState({
      deletionArray: helperArray,
      allSelected: !this.state.allSelected,
    });
  }


  selectAnItem(index) {
    let helperArray = this.state.deletionArray;
    let ItemIndex = helperArray.indexOf(index);
    if (helperArray.includes(index)) {
      helperArray.splice(ItemIndex, 1);
      this.setState({allSelected: false});
    } else {
      helperArray.push(index);
    }
    this.setState({deletionArray: helperArray});
  }
  simpleAlertHandler(){
    //function to make simple alert
    alert('You have successfully assigned leads to Mr David.');
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
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
              this.props.navigation.navigate('HomeDrawer');
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
              {'Un-Assigned Lists'}
            </Text>
          </View>
        </View>

        <StatusBar barStyle="light-content" backgroundColor="#00acee" />
        <View style={styles.header}>
          <TextInput
            placeholder="Filter By App,Web"
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: 'row',
              width: wp('90%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: wp('75%'),
              }}>
              <Body
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: hp('2%'),
                }}>
                <Title
                  style={{
                    color: '#000',
                  }}>
                  Total Leads : {this.state.users.length}
                </Title>
                <Subtitle
                  style={{
                    color: '#000',
                  }}>
                  Selected Leads : {this.state.deletionArray.length}
                </Subtitle>
              </Body>
            </View>
            <Button onPress={() => this.selectAll()} style={{
              backgroundColor:"#fff",
              marginTop:hp("2.5%"),
              marginLeft:wp("-8%"),
              width:wp("20%"),
              alignItems:"center",
              justifyContent:"center",
              borderWidth:wp("0.3%"),
              borderColor:"#00acee",
              borderRadius:10
            }}>
              <Text>
                {this.state.allSelected ? 'Unselect All' : ' select All'}
              </Text>
            </Button>
          </View>
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.bookContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp('90%'),
                    height: hp('10%'),

                    borderColor: 'grey',
                    borderRadius: wp('5%'),

                    marginVertical: hp('1%'),
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 1,
                    shadowRadius: 2,
                    elevation: 5,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: wp('30%'),
                    }}>
                    <CheckBox
                      onPress={() => this.selectAnItem(index)}
                      style={{marginRight: 30}}
                      checked={this.state.deletionArray.includes(index)}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: wp('30%'),
                    }}>
                    <Text numberOfLines={1} style={styles.title}>
                      {item.name}
                    </Text>

                    <Text style={styles.author}>{item.product}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: wp('20%'),
                    }}>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.description}
                    </Text>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.to}
                    </Text>
                  </View>
                </View>
             </View>
            );
            
          }}
        />
           <View
            style={{
              width: wp('100%'),
              height: hp('8%'),
              backgroundColor: '#00acee',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp('-2%'),
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: hp('2.5%'),
                  marginHorizontal: wp('5%'),
                  marginTop: hp('2%'),
                }}>
                {'Assign To'}
              </Text>

              <Picker
                style={{width: wp('40%'), marginTop: hp('1%')}}
                selectedValue={this.state.PickerValue}
                itemStyle={{

                  color: 'blue',
                  fontSize: 17,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    PickerValue: itemValue,
                  })
                }>
                <Picker.Item label="abc" value="abc" />
                <Picker.Item label="xyz" value="xyz" />
              </Picker>
            </View>
            <TouchableOpacity
              onPress={() => this.simpleAlertHandler()}
              style={{
                width: wp('25%'),
                height: hp('4%'),
                backgroundColor: '#fff',
                borderRadius: wp('2%'),
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: hp('-1%'),
              }}>
              <Text
                style={{
                  color: '#00acee',
                  fontSize: hp('2.5%'),
                  fontWeight: 'bold',
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 140,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  back: {
    width: 30,
    height: 30,
  },
  input: {
    height: 45,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: wp('0.3%'),
    borderColor: 'green',
    marginTop: 20,
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 90,
    margin: '2%',
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#00acee',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
