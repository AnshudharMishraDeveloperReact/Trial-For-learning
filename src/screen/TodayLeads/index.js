import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {BarChart, PieChart} from 'react-native-chart-kit';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyBarChart = () => {
  return (
    <View style={{
      alignItems:"center",
      justifyContent:"center"
    }}>
    <View
    style={{
      width:wp("90%"),
      // backgroundColor:"red",
      padding:wp("2%")
    }}>
      <Text style={styles.header}>Bar Chart</Text>
      <BarChart
        data={{
          labels: ['Ayush', 'Saumya', 'Prashant'],
          datasets: [
            {
              data: [52, 42, 65],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={'Leads-'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        
        }}
      />
      </View>
    </View>
  );
};

const MyPieChart = () => {
  return (
    <View style={{
      alignItems:"center",
      justifyContent:"center"
    }}>
    <View
    style={{
      width:wp("90%"),
 
    marginLeft:wp("-15%")
    }}>
      <Text style={styles.header}>{''}</Text>
      <PieChart
        data={[
          {
            name: 'NI',
            population: 10,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 14,
          },
          {
            name: 'Status Not Swap',
            population: 20,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 14,
          },
          {
            name: 'DNP',
            population: 30,
            color: 'yellow',
            legendFontColor: '#7F7F7F',
            legendFontSize: 14,
          },
          {
            name: 'MF',
            population: 40,
            color: 'rgb(0, 255, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 14,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="5"
        absolute //For the absolute number else percentage
      />
    </View>
    </View>
  );
};

const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#fff"}}>
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
            width: wp('75%'),
           alignItems:"center",
           justifyContent:"center"
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: hp('3%'),
              fontWeight: 'bold',
            }}>
            {'Todays Work'}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: wp('90%'),
            }}>
            <MyPieChart />
          </View>
          <View
            style={{
              width: wp('90%'),
            }}>
            <MyBarChart />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  image: {
    width: wp('5%'),
    height: hp('4.5%'),
  },
});
