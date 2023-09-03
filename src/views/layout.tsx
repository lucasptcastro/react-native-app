import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Navbar from "../components/Navbar";
import Header from "../components/Header";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <StatusBar style="dark" translucent />
      <View className="flex-1 bg-[#f1f0f5] pt-6">
        <Header />
        <View className="p-5">{children}</View>
        <Navbar />
      </View>
    </>
  );
}
