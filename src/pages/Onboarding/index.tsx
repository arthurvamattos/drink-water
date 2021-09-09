import React from "react";

import blurImage from "../../assets/blur-bg.png";
import waterImage from "../../assets/water.png";
import { Button } from "../../components/Button";

import { Container, Logo, MainImage, BlurWrapper, Heading } from "./styles";

export function Onboarding() {
  return (
    <Container>
      <Logo>Drink Water</Logo>

      <MainImage
        source={waterImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 32 }}
      >
        <BlurWrapper
          source={blurImage}
          resizeMode="cover"
          imageStyle={{ borderRadius: 28 }}
        >
          <Heading>
            Let's adjust some settings and start hydrating ourselves
          </Heading>
        </BlurWrapper>
      </MainImage>

      <Button>Start</Button>
    </Container>
  );
}
