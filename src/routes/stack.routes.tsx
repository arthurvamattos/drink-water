import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Onboarding } from "../pages/Onboarding";
import { Config } from "../pages/Config";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  // const { theme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
  );
}
