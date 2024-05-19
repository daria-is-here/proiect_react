import React from 'react';
import { View, Text, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const PinkBackground = styled.View`
  flex: 1;
  background-color: #FFC0CB; 
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: bold; 
  margin-bottom: 10px;
  color: #800080; 
  
`;
const HomeScreen = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);
  const navigation = useNavigation();
  return (
    <PinkBackground>
      <WelcomeText>Bine ai venit, {userName}! </WelcomeText> 
      <Button title="Pagina de user" onPress={() => navigation.navigate('User')} />
    
    </PinkBackground>
  );
};

export default HomeScreen;