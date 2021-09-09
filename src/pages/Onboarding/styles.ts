import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  padding: ${Constants.statusBarHeight + 56}px 32px 32px;
`;

export const Logo = styled.Text`
  font-size: 18px;
  line-height: 22px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const MainImage = styled.ImageBackground`
  /* height: ${Dimensions.get("window").height * 0.64}px; */
  flex: 1%;
  border-radius: 32px;
  margin: 36px 0 16px;
  padding: 16px;

  justify-content: flex-end;
`;

export const BlurWrapper = styled.ImageBackground`
  padding: 16px 24px;
`;

export const Heading = styled.Text`
  font-size: 14px;
  line-height: 26px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;
