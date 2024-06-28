import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native';



const App = () => {
  return<View style={{width:"100%", height:"100%" }}>
     <AppNavigator />
  </View>;
};

export default App;
