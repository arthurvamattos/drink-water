import React, { ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, ButtonText } from "./styles";

type ButtonProps = RectButtonProps & {
  children: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
