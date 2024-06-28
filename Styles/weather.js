import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 30px;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: center;
`;

const TopBar = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-align: center;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  background-color: white;
  border-radius: 20px;
  padding: 0 15px;
`;

const Card = styled.View`
  padding: 20px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  height: auto;
`;

const WeatherInfo = styled.View`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const WeatherInfoLabel = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 5px;
`;

const WeatherInfoValue = styled.Text`
  color: white;
  font-size: 16px;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 15px 40px;
  background-color: #4caf50;
  border-radius: 30px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

const ForecastContainer = styled.View`
  margin-top: 20px;
`;

const ForecastItem = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-vertical: 10px;
  margin-bottom: 10px;
`;

const ForecastText = styled.Text`
  color: white;
  font-size: 14px;
`;

const ModalContainer = styled.View`
  align-items: center;
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
`;

const ModalView = styled.View`
  background-color: transparent;
  border-radius: 20px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  width: 100%;
  height: 90%;
  margin-top: 20px;
`;

const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: white;
`;

const ModalScrollView = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: #4caf50;
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const CloseButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export {
    CloseButtonText,
    CloseButton,
    ModalScrollView,
    ModalTitle,
    ModalView,
    ModalContainer,
    ForecastText,
    ForecastItem,
    ForecastContainer,
    ButtonText,
    StyledButton,
    WeatherInfoValue,
    WeatherInfoLabel,
    WeatherInfo,
    Card,
    SearchInput,
    Title,
    TopBar,
    Container
}