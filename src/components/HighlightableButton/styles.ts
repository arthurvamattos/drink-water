import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

type ContainerProps = {
  hightlighted: boolean;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  height: 69px;
  background: ${(props) =>
    props.hightlighted ? props.theme.colors.primary : "transparent"};
  border-radius: 16px;
`;

export const BorderWrapper = styled.View`
  flex: 1;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.primary};

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text<ContainerProps>`
  font-size: 14px;
  line-height: 26px;
  margin-left: 8px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) =>
    props.hightlighted ? props.theme.colors.white : props.theme.colors.primary};
`;
