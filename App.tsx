// import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/routes";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import ContextProvider from "./src/contexts";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </ThemeProvider>
  );
}
