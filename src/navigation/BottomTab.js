import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../Screen/HomeTab';
import Notifications from '../Screen/Notifications';
import Createnew from '../Screen/Createnew';
import Profile from '../Screen/Profile';


const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'HomeTab'}</Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/home.jpg')}
                  style={{width: 26, height: 26}}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NotificationsTab"
        component={Notifications}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Notifications'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/home.png')}
                  style={{width: 26, height: 26, }}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="CreatenewTab"
        component={Createnew}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Createnew'}</Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/plus.png')}
                  style={{width: 26, height: 26, tintColor: color}}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ProfileTab"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Profile'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/home.png')}
                  style={{width: 26, height: 30, }}
                />
              ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;