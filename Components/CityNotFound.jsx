// CityNotFound.js

import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, View } from 'react-native';



const MessageText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); 
`;

const CityNotFound = () => {
  return (
  
      <View style={{  justifyContent: 'center', alignItems: 'center' , marginTop:"300px"}}>
        <MessageText>City not found. Please try again.</MessageText>
      </View>
   
  );
};

export default CityNotFound;
