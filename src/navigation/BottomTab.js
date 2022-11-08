import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../Screen/HomeTab';
import Notifications from '../Screen/Notifications';
import Createnew from '../Screen/Createnew';
import Profile from '../Screen/Profile';
import MyMapView from '../Screen/MyMapView';

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
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/home.jpg')}
                  style={{width: 20, height: 20}}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Notification'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                source={require('../assets/images/home.png')}
                style={{width: 24, height: 24, }}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Createnew"
        component={Createnew}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Create'}</Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/plus.png')}
                  style={{width: 20, height: 20, tintColor: color}}
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
                  style={{width: 24, height: 24, }}
                />
              ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="MyMapView"
        component={MyMapView}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Map'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/map.png')}
                  style={{width: 23, height: 25, }}
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