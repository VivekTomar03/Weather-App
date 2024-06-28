import React from "react";
import { FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { CityCard, CityText, Container, Title } from "../Styles/cityStyle";
import { backgroundImage, topCities } from "../Constant/topCities";

const CitySearchScreen = ({ navigation }) => {
  const renderCityCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("WeatherDetails", { city: item.name })}
    >
      <CityCard>
        <CityText>
          {item.name}, {item.country}
        </CityText>
      </CityCard>
    </TouchableOpacity>
  );
  return (
    <ImageBackground source={{ uri: backgroundImage }} style={{ flex: 1 }}>
      <Container>
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
