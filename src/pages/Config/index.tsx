import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { Feather } from "@expo/vector-icons";

import blurImage from "../../assets/blur-bg.png";
import waterImage from "../../assets/water.png";

import { Button } from "../../components/Button";
import { HighlightableButton } from "../../components/HighlightableButton";
import { useTheme } from "../../hooks/useTheme";

import {
  Container,
  Logo,
  Form,
  Message,
  Input,
  ModalTitle,
  ModalMessage,
  ThemeButtonsWrapper,
} from "./styles";

export function Config() {
  const modalizeRef = useRef<Modalize>(null);
  const { theme, toggleTheme } = useTheme();

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  return (
    <Container>
      <Logo>Drink Water</Logo>

      <Form>
        <Message>
          Please let me know your weight, so I know how much water to suggest to
          you
        </Message>

        <Input
          placeholder="Your weight"
          placeholderTextColor={theme.colors.gray}
          keyboardType="numeric"
        />
        <Button onPress={handleOpenModal}>Continue</Button>
      </Form>

      <Modalize
        ref={modalizeRef}
        snapPoint={360}
        modalStyle={{
          backgroundColor: theme.colors.background,
          paddingHorizontal: 36,
          paddingVertical: 64,
        }}
      >
        <ModalTitle>What about the appearance?</ModalTitle>
        <ModalMessage>Light or dark mode?</ModalMessage>

        <ThemeButtonsWrapper>
          <HighlightableButton
            text="Light"
            hightlighted={theme.title === "light"}
            icon={
              <Feather
                name="sun"
                size={24}
                color={
                  theme.title === "light"
                    ? theme.colors.white
                    : theme.colors.primary
                }
              />
            }
            onPress={() => theme.title !== "light" && toggleTheme()}
          />
          <HighlightableButton
            text="Dark"
            hightlighted={theme.title === "dark"}
            icon={
              <Feather
                name="moon"
                size={24}
                color={
                  theme.title === "dark"
                    ? theme.colors.white
                    : theme.colors.primary
                }
              />
            }
            style={{ marginLeft: 8 }}
            onPress={() => theme.title !== "dark" && toggleTheme()}
          />
        </ThemeButtonsWrapper>

        <Button>Save and proceed</Button>
      </Modalize>
    </Container>
  );
}
