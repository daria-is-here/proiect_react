import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import fetchUserData from '../../../api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import styled from 'styled-components/native';

const PinkBackground = styled.View`
  flex: 1;
  background-color: #FFC0CB; 
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 18px; 
  margin-bottom: 10px; 
  color: #800080; /* Mov */
`;
const Titlu= styled.Text`
    font-size:20px ;
    mergin-botoom:10px;
    color:#FF1493;

`;

const UserPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const data = await fetchUserData(token);
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  interface User {
    email: string;
    id: string;
  }

  interface UserDetails {
    currentlyGamesPlaying: number;
    gamesLost: number;
    gamesPlayed: number;
    gamesWon: number;
    user: User;
  }

  return (
    <PinkBackground>
      <Titlu>User Details:</Titlu>
      {userDetails && (
        <View>
          <StyledText>Email: {userDetails.user.email}</StyledText>
          <StyledText>ID: {userDetails.user.id}</StyledText>
          <Text>Games Played: {userDetails.gamesPlayed}</Text>
          <Text>Games Won: {userDetails.gamesWon}</Text>
          <Text>Games Lost: {userDetails.gamesLost}</Text>
          <Text>Currently Playing: {userDetails.currentlyGamesPlaying}</Text>
        </View>
      )}
    </PinkBackground>
  );
};

export default UserPage;
