import 'react-native-gesture-handler';
import * as React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
let {Width, Height} = Dimensions.get('window');
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const Stack = createStackNavigator();
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Profile from '../screen/Profile/index';
import Practice from '../screen/Practice';
import Leads from '../screen/Leads';
import UnassignedList from '../screen/UnassignedList';
import AssignedList from '../screen/AssignedList';
import LeadsDetails from '../screen/LeadsDetails';
import Router from '../screen/Router/index';
import Demo from '../screen/Demo/index';
import MeetingInfo from '../screen/MeetingInfo/index.js';
import HomeDrawer from "../screen/HomeDrawer/index";
import MeetingFixed from "../screen/MeetingFixed/index";
import TodayLeads from "../screen/TodayLeads/index";
import Notify from "../screen/Notify/index";
import Deno from "../screen/Deno/index";
import Search from "../screen/Search/index";
import History from "../screen/History/index";

function AuthNavigator({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{headerShown: false}}
        component={Signup}
      />
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
      <Stack.Screen
        name="Practice"
        options={{headerShown: false}}
        component={Practice}
      />
       <Stack.Screen
        name="Leads"
        options={{headerShown: false}}
        component={Leads}
      />
       <Stack.Screen
        name="UnassignedList"
        options={{headerShown: false}}
        component={UnassignedList}
      />
       <Stack.Screen
        name="AssignedList"
        options={{headerShown: false}}
        component={AssignedList}
      />
       <Stack.Screen
        name="LeadsDetails"
        options={{headerShown: false}}
        component={LeadsDetails}
      />
       <Stack.Screen
        name="Router"
        options={{headerShown: false}}
        component={Router}
      />
       <Stack.Screen
        name="Demo"
        options={{headerShown: false}}
        component={Demo}
      />
        <Stack.Screen
        name="MeetingInfo"
        options={{headerShown: false}}
        component={MeetingInfo}
      />
       <Stack.Screen
        name="HomeDrawer"
        options={{headerShown: false}}
        component={HomeDrawer}
      />
       <Stack.Screen
        name="MeetingFixed"
        options={{headerShown: false}}
        component={MeetingFixed}
      />
        <Stack.Screen
        name="TodayLeads"
        options={{headerShown: false}}
        component={TodayLeads}
      />
        <Stack.Screen
        name="Notify"
        options={{headerShown: false}}
        component={Notify}
      />
       <Stack.Screen
        name="Deno"
        options={{headerShown: false}}
        component={Deno}
      />
        <Stack.Screen
        name="Search"
        options={{headerShown: false}}
        component={Search}
      />
         <Stack.Screen
        name="History"
        options={{headerShown: false}}
        component={History}
      />
    </Stack.Navigator>
  );
}



function AuthToHome() {
  return (
    <NavigationContainer independent={true}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
export default AuthToHome;
