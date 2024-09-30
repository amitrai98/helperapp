import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CardScreen from "./CardsScreen";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, marginTop: 80, paddingHorizontal: 20 }}>
      <CardScreen />
    </View>
  );
}
