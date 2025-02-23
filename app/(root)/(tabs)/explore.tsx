import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Explore = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Explore {id}</Text>
    </View>
  );
};

export default Explore;
