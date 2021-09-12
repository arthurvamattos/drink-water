import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  padding: ${Constants.statusBarHeight + 56}px 32px 32px;
`;

export const Logo = styled.Text`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Form = styled.View`
  margin: auto;
  width: 100%;
`;

export const Message = styled.Text`
  width: ${Dimensions.get("window").width * 0.8}px;
  margin-bottom: 36px;
  font-size: 18px;
  line-height: 27px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 69px;
  background: ${(props) => props.theme.colors.foreground};
  border-radius: 16px;

  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray};
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;

  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 14px;
`;

export const ModalTitle = styled.Text`
  font-size: 14px;
  line-height: 27px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const ModalMessage = styled.Text`
  font-size: 12px;
  line-height: 24px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
`;

export const ThemeButtonsWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 16px 0;
`;
