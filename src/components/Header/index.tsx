import React from "react";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View className="flex h-5 w-full items-center justify-center bg-[#3b82f6]">
        <Text className="text-center text-white">
          Só hoje, frete grátis para todo o Brasil
        </Text>
      </View>
    </>
  );
}
