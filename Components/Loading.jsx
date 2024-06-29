// Loading.js

import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  margin-top:150px;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size={"large"} color="#4caf50" />
    </Container>
  );
};

export default Loading;
