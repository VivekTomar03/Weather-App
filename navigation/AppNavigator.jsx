import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CitySearchScreen from '../screens/CitySearchScreen';
import WeatherDetailsScreen from '../screens/WeatherDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CitySearch">
        <Stack.Screen name="CitySearch" component={CitySearchScreen} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
