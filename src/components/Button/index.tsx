import React, { ReactNode } from "react";

import { Container, ButtonText } from "./styles";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
