import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  ImageBackground,
  Alert,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  CloseButtonText,
  CloseButton,
  ModalScrollView,
  ModalTitle,
  ModalView,
  ModalContainer,
  ForecastText,
  ForecastItem,
  ButtonText,
  StyledButton,
  WeatherInfoValue,
  WeatherInfoLabel,
  WeatherInfo,
  Card,
  SearchInput,
  Title,
  TopBar,
} from "../Styles/weather";
import { getBackgroundImage } from "../utils";
// Replace with your actual API key from OpenWeatherMap
const API_KEY = "f6a9ae79a864a96c889b51704f84715e";

const WeatherDetailsScreen = ({ route, navigation }) => {
  const city = route?.params?.city;
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (city) {
      setCityName(city);
      fetchWeatherData(city);
      fetchForecastData(city);
    } else {
      setCityName(city);
      fetchWeatherData("new york");
      fetchForecastData("new york");
    }
    return () => {
      setCityName("");
    };
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch weather data");
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setForecastData(data.list);
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch forecast data");
    }
  };

  const handleSearch = () => {
    if (cityName) {
      fetchWeatherData(cityName);
      fetchForecastData(cityName);
    }
  };

  const backgroundImage = weatherData
    ? getBackgroundImage(weatherData.weather[0].main)
    : null;

  const filteredForecastData = forecastData?.filter(
    (item) => new Date(item.dt * 1000).getHours() === 2
  );

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
      <Container>
        <TopBar>
          <SearchInput
            placeholder="Enter city name..."
            placeholderTextColor="gray"
            value={cityName}
            onChangeText={setCityName}
            onSubmitEditing={handleSearch}
          />
        </TopBar>
        {weatherData && (
          <>
            <Title>Weather Details for {weatherData.name}</Title>
            <Card>
              <Image
                style={{ width: "30%", height: "30%" }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                }}
              />
              <WeatherInfo>
                <WeatherInfoLabel>Temperature:</WeatherInfoLabel>
                <WeatherInfoValue>{weatherData.main.temp}°C</WeatherInfoValue>
              </WeatherInfo>
              <WeatherInfo>
                <WeatherInfoLabel>Feels Like:</WeatherInfoLabel>
                <WeatherInfoValue>
                  {weatherData.main.feels_like}°C
                </WeatherInfoValue>
              </WeatherInfo>
              <WeatherInfo>
                <WeatherInfoLabel>Humidity:</WeatherInfoLabel>
                <WeatherInfoValue>
                  {weatherData.main.humidity}%
                </WeatherInfoValue>
              </WeatherInfo>
              <WeatherInfo>
                <WeatherInfoLabel>Wind Speed:</WeatherInfoLabel>
                <WeatherInfoValue>
                  {weatherData.wind.speed} m/s
                </WeatherInfoValue>
              </WeatherInfo>
              <StyledButton onPress={() => setModalVisible(true)}>
                <ButtonText>See 5-Day Forecast</ButtonText>
              </StyledButton>
            </Card>
          </>
        )}
      </Container>

      {/* Modal for 5-Day Forecast */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalView>
            <ModalTitle>5-Day Forecast</ModalTitle>
            <ModalScrollView>
              {filteredForecastData?.map((item, index) => (
                <ForecastItem key={index}>
                  <ForecastText>
                    Date: {new Date(item.dt * 1000).toLocaleDateString()}
                  </ForecastText>
                  <ForecastText>
                    Time: {new Date(item.dt * 1000).toLocaleTimeString()}
                  </ForecastText>
                  <ForecastText>Temperature: {item.main.temp}°C</ForecastText>
                  <ForecastText>
                    Weather: {item.weather[0].description}
                  </ForecastText>
                </ForecastItem>
              ))}
            </ModalScrollView>
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseButtonText>Close</CloseButtonText>
            </CloseButton>
          </ModalView>
        </ModalContainer>
      </Modal>
    </ImageBackground>
  );
};

export default WeatherDetailsScreen;
