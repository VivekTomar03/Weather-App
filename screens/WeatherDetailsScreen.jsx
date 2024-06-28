import React from 'react';
import styled from 'styled-components/native';
import { Button, Text, ImageBackground } from 'react-native';

const mockWeatherData = {
  coord: {
    lon: 2.3488,
    lat: 48.8534
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n"
    }
  ],
  main: {
    temp: 16.16,
    feels_like: 15.79,
    temp_min: 15.21,
    temp_max: 16.81,
    pressure: 1016,
    humidity: 75,
    sea_level: 1016,
    grnd_level: 1006
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 320
  },
  clouds: {
    all: 100
  },
  sys: {
    type: 2,
    id: 2012208,
    country: "FR",
    sunrise: 1719546575,
    sunset: 1719604682
  },
  timezone: 7200,
  id: 2988507,
  name: "Paris",
  cod: 200
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

const WeatherDetailsScreen = ({ route, navigation }) => {
  const city = route?.params?.city;
  const weatherData =  mockWeatherData 

  const getBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case 'clear':
        return 'https://example.com/clear.jpg';
      case 'clouds':
        return 'https://example.com/clouds.jpg';
      case 'rain':
        return 'https://example.com/rain.jpg';
      case 'snow':
        return 'https://example.com/snow.jpg';
      default:
        return 'https://example.com/default.jpg';
    }
  };

  const backgroundImage = getBackgroundImage(weatherData.weather[0].main.toLowerCase());

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
      <Container>
        <Title>Weather Details for {city || ""}</Title>
        {weatherData ? (
          <>
            <Text style={{ color: 'white' }}>Temperature: {weatherData.main.temp}°C</Text>
            <Text style={{ color: 'white' }}>Feels Like: {weatherData.main.feels_like}°C</Text>
            <Text style={{ color: 'white' }}>Humidity: {weatherData.main.humidity}%</Text>
            <Text style={{ color: 'white' }}>Wind Speed: {weatherData.wind.speed} m/s</Text>
          </>
        ) : (
          <Text style={{ color: 'white' }}>No Data Available</Text>
        )}
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </Container>
    </ImageBackground>
  );
};

export default WeatherDetailsScreen;
