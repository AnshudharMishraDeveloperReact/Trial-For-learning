import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import {Text, View, Image, StyleSheet, FlatList,Dimensions,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import flatListData from '../../component/ExecutiveList/index';
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
            height: hp('10%'),
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
              marginTop: hp('5%'),
              marginLeft: wp('10%'),
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
           
         
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
         
            <Text style={styles.flatListItem1}>{this.props.item.names}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
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
          height: ("100%")
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
              {'Assigned List'}
            </Text>
          </View>
        </View>
       <ScrollView>
        <View style={{flex: 1, marginVertical: hp('2%'),alignItems:"center",justifyContent:"center"}}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('90%'),
            height: hp('10%'),
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
              marginTop: hp('5%'),
              marginLeft: wp('10%'),
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
              <TouchableOpacity
            onPress={() => {
                   this.props.navigation.navigate('LeadsDetails');
                  }}>
         
            <Text style={styles.flatListItem}>{"110000"}</Text>
            </TouchableOpacity>
            <Text style={styles.flatListItem1}>{'website'}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text style={styles.flatListItem2}>{"abc"}</Text>
            <Text style={styles.flatListItem3}>{"xyz"}</Text>
          </View>
        </View>
          <FlatList
            data={flatListData}
            renderItem={({item, index}) => {
              //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
              return (
                <FlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this}></FlatListItem>
              );
            }}></FlatList>
        </View>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width:wp("5%"),
    height: hp('4.5%'),
    marginTop:hp("0.5%")
  },
  filtermain: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  filter: {
    fontSize: hp('3%'),
  },
  flatListItem: {
    paddingLeft: wp('6%'),
    paddingTop: wp('2%'),
    fontSize: hp('2.5%'),
    color: '#00acee',
    fontWeight: 'bold',
  },
  flatListItem1: {
    paddingLeft: wp('6%'),
    fontSize: hp('2%'),

    fontWeight: 'bold',
    paddingTop: wp('1%'),
  },
  flatListItem2: {
    paddingLeft: wp('4%'),
    fontSize: hp('2%'),
    paddingTop: wp('3%'),
  },
  flatListItem3: {
    paddingLeft: wp('4%'),
    fontSize: hp('2%'),
    paddingTop: wp('1%'),
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
