import React, { ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, ButtonText, BorderWrapper } from "./styles";

type ButtonProps = RectButtonProps & {
  icon: ReactNode;
  text: string;
  hightlighted: boolean;
};

export function HighlightableButton({
  icon,
  text,
  hightlighted = false,
  ...rest
}: ButtonProps) {
  return (
    <Container hightlighted={hightlighted} {...rest}>
      <BorderWrapper>
        {icon}
        <ButtonText hightlighted={hightlighted}>{text}</ButtonText>
      </BorderWrapper>
    </Container>
  );
}
