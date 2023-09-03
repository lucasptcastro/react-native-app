import { Text, TouchableOpacity, View } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

export default function Navbar() {
  const routes = [
    {
      icon: <AntDesign name="home" size={30} color="#3B82F6" />,
      label: "Início",
      active: true,
    },
    {
      icon: <AntDesign name="shoppingcart" size={30} color="#9AA1B3" />,
      label: "Carrinho",
    },
  ];

  return (
    <View className="absolute bottom-0 flex w-full flex-row items-center justify-evenly border-t-[1px] border-t-slate-300 bg-white py-2">
      {routes.map((route) => (
        <TouchableOpacity className="flex items-center" key={route.label}>
          {route.icon}
          <Text
            className={`font-bold ${
              route.active ? "text-[#3B82F6]" : "text-[#9AA1B3]"
            } text-xs`}
          >
            {route.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
