import React from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity, ImageBackground } from 'react-native'; // Import ImageBackground from react-native


const backgroundImage = 'https://i.pinimg.com/564x/de/b4/eb/deb4ebc989322fc85762d6f0e245fa44.jpg'; // Background image URL

const Container = styled.View`
  flex: 1;
 padding-top:40px;
 padding-bottom:20px;
 padding-left:20px;
 padding-right:20px;
 justify-content:center;
 margin-top:80px;

`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white; 
`;

const CityCard = styled.View`
  padding: 10px;
  margin-vertical: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  elevation: 5; 
  shadow-color: #000; 
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3; 
  shadow-radius: 5px;
`;

const CityText = styled.Text`
   font-size: 18px;
  color: #ffffff; 
  text-align: center;
  padding: 10px;
  width: 100%;

`;

const topCities = [
  { name: 'New York', country: 'USA' },
  { name: 'London', country: 'UK' },
  { name: 'Paris', country: 'France' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Sydney', country: 'Australia' },
];

const CitySearchScreen = ({ navigation }) => {
  const renderCityCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('WeatherDetails', { city: item.name })}>
      <CityCard >
        <CityText>{item.name}, {item.country}</CityText>
      </CityCard>
     
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
      <Container >
        <Title>Top Cities</Title>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={topCities}
          renderItem={renderCityCard}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </ImageBackground>
  );
};

export default CitySearchScreen;
