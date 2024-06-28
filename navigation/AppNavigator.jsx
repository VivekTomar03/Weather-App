import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Ionicons for icons

import CitySearchScreen from '../screens/CitySearchScreen';
import WeatherDetailsScreen from '../screens/WeatherDetailsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer  >
      <Tab.Navigator
        initialRouteName="CitySearch"
        screenOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          headerShown: false,
        
        }}
        
      
      >
        <Tab.Screen
          name="CitySearch"
          component={CitySearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
            
          }}
        />
        <Tab.Screen
          name="WeatherDetails"
          component={WeatherDetailsScreen}
          options={{
            tabBarLabel: 'Weather',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cloud" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
