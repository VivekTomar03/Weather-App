import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CitySearchScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>City Search Screen</Title>
      <Button
        title="Go to Weather Details"
        onPress={() => navigation.navigate('WeatherDetails')}
      />
    </Container>
  );
};

export default CitySearchScreen;
