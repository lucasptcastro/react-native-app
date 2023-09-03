import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";

interface IProductCard {
  id: number | string;
  name: string;
  price: any;
  description: string;
}

export default function ProductCard({
  id,
  name,
  price,
  description,
}: IProductCard) {
  return (
    <View
      className="my-5 flex min-h-fit rounded-xl bg-white shadow-md shadow-[#a2a2a2]"
      key={id}
    >
      <Image
        source={require("../../assets/images/products/product1.jpg")}
        className="h-32 w-full rounded-xl object-cover object-center"
      />
      <View className="flex flex-col gap-3 p-5">
        {/* Name + price */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-base font-bold">{name}</Text>
          <Text className="text-base font-bold">
            R$
            {price.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </Text>
        </View>

        {/* Description */}
        <View>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
}
