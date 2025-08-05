import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Newsignup from './app/screens/newsignup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './app/screens/profile';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image, View } from 'react-native';
import User from './app/screens/user';
import Offer from './app/screens/offer';
import { RootStackParamList, BottomTabParamList } from './app/screens/types';
import MyTabs from './app/screens/mytabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import Notes from './app/screens/notes';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();




const BottomTabs = () => {

  const route = useRoute<RouteProp<RootStackParamList, 'BottomTabs'>>();
  const { id, name,status,Date,city,collection_status,engagement_Type,company_exposure,type_of_Business,fico,Credit_Grade,uw_status,white_Label} = route.params;

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={User} initialParams={{ id, name,status,Date,city,collection_status,engagement_Type,company_exposure,type_of_Business,fico,Credit_Grade,uw_status,white_Label }} 
       options={{
        tabBarActiveBackgroundColor:'lightgray',
        tabBarStyle:{
                    height:hp('8%')
                  },
        tabBarIcon: ({ focused }) => (
          <View>
             <Image
            source={require('../rn_app/app/assets/home_1.png')}
            style={{
              width: wp('5%'),
              height: hp('3%'),
              tintColor: focused ? 'blue' : 'lightgray',
            }}
          />
          </View>
         
        ),
      }} />
      <Tab.Screen name='Notes' component={Notes} initialParams={{id}} options={{
        tabBarActiveBackgroundColor:'lightgray',
        tabBarStyle:{
                    height:hp('8%')
                  },
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../rn_app/app/assets/notes_1.png')}
            style={{
              height: hp('3%'),
              width: wp('5%'),
              tintColor: focused ? 'green' : 'lightgray',
            }}
          />
        )
      }} />
      <Tab.Screen name='Offer' component={Offer} options={{
      tabBarActiveBackgroundColor:'lightgray',
      tabBarStyle:{
                  height:hp('8%')
                },
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../rn_app/app/assets/offer_1.png')}
            style={{
              height: hp('3%'),
              width: wp('5%'),
              tintColor: focused ? 'purple' : 'lightgray',
            }}
          />
        )
      }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Newsignup' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Newsignup' component={Newsignup} />
        <Stack.Screen name='MyTabs' component={MyTabs} />
       <Stack.Screen name='BottomTabs' component={BottomTabs} />
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
  );
}




