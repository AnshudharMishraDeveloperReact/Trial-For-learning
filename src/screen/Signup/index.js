import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import flatListData from '../../component/ManagerList/index.js';
import Checkbox from '../../component/Checkbox/index';
import { ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems:"center",
          justifyContent:"center"
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('90%'),
            height: hp('12%'),
            borderColor: 'grey',
            borderRadius: wp('5%'),
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
            marginVertical: hp('1%'),
            backgroundColor:"#fff"
          }}>
          <View
            style={{
              marginTop: hp('3%'),
              marginLeft: wp('-5%'),
            }}>
            <Checkbox />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem1}>{this.props.item.names}</Text>
            <Text style={styles.flatListItem2}>{this.props.item.namess}</Text>
            <Text style={styles.flatListItem3}>{this.props.item.namessss}</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'white',
          }}></View>
      </View>
    );
  }
}

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
           source={require("../../assests/bg.jpg")}
           style={{
             width:wp("100%"),
             height: hp("100%")

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
              {'Manager List'}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: hp('1.5%'),
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: hp('2.5%'),
              fontWeight: 'bold',

              marginHorizontal: wp('5%'),
            }}>
            {' All Un-Assigned Leads'}
          </Text>
        </View>

        <View style={{flex:1}}>
          <FlatList
            data={flatListData}
            renderItem={({item, index}) => {
              return (
                <FlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this}></FlatListItem>
              );
            }}></FlatList>
             <View
          style={{
            width: wp('100%'),
            height: hp('8%'),
            backgroundColor: '#00acee',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
           <TouchableOpacity
           onPress={()=>{this.props.navigation.navigate('AssignedList')}}>
          <Text
            style={{
              color: '#fff',
              fontSize: hp('3%'),

              fontWeight: 'bold',
            }}>
            {'View Assigned Leads '}
          </Text>
          </TouchableOpacity>
        </View>
        </View>
       
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: wp("5%"),
    height: hp('4.5%'),
  },
  flatListItem: {
    paddingLeft: wp('4%'),
    paddingTop: wp('1%'),
    fontSize: hp('2%'),
    color: '#00acee',
    fontWeight: 'bold',
  },
  flatListItem1: {
    paddingLeft: wp('4%'),
    fontSize: hp('2%'),
  },
  flatListItem2: {
    paddingLeft: wp('4%'),
    fontSize: hp('1.5%'),
  },
  flatListItem3: {
    paddingLeft: wp('4%'),
    fontSize: hp('1.5.5%'),
  },
  footer: {
    width: wp('10%'),
    height: hp('5%'),
    marginHorizontal: wp('7%'),
    marginTop: hp('0.8%'),
  },
  footer1: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginHorizontal: wp('5%'),
  },
});
