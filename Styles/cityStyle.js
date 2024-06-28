import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  margin-top: 80px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

export const CityCard = styled.View`
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

export const CityText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  width: 100%;
`;
