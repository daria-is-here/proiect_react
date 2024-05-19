import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const colors = {
  pinkBackground: '#FFC0CB',
  purpleBorder: '#800080'
};
const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: ${colors.pinkBackground};
`;

const Input = styled.TextInput`
  width: 100%;
  height: 30px;
  border: 1px solid ${colors.purpleBorder};
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.TouchableOpacity``;

export interface ILogin {
  onSubmit: (email: string, password: string) => void;
  goToRegister: () => void;
}

const Login: React.FC<ILogin> = ({ onSubmit, goToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login form submit:', { email, password });
    onSubmit(email, password);
  };

  return (
    <Container>
      <Input
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <Input
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
      <Button onPress={goToRegister}>
        <Text>Register</Text>
      </Button>
    </Container>
  );
};

export default Login;
