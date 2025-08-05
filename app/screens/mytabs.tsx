
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile';

export type MyTabParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MyTabParamList>();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarStyle: {
            height: hp('8%')
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/home_1.png')}
                style={{
                  width: wp('5%'),
                  height: hp('3%'),
                  tintColor: focused ? 'blue' : 'lightgray',
                }}
                resizeMode="contain"
              />
            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: {
            height: hp('8%')
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/list_1.png')}
              style={{
                width: wp('5%'),
                height: hp('3%'),
                tintColor: focused ? 'green' : 'lightgray',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;




