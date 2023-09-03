import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import Layout from "./layout";

import { useCartContext } from "../context/CartContext";
import { getAllProducts } from "../lib/products";

import ProductCard from "../components/Card/ProductCard";

// import product1 from "../assets/images/products/product1.jpg";

export default function Main() {
  // useContext
  const cartContext: any = useCartContext();
  const productsInCart = cartContext[1];
  const addProductToCart = cartContext[2];

  // products
  const products = getAllProducts();
  const verifyProductInCart = (id: number, tag: string) => {
    let index = productsInCart
      .slice(1)
      .findIndex((value: any) => value.id == id);

    if (tag == "p") {
      if (index > -1) {
        return "block";
      } else {
        return "hidden";
      }
    } else {
      if (index > -1) {
        return "hidden";
      } else {
        return "block";
      }
    }
  };

  return (
    <Layout>
      <View className="flex space-y-5">
        <Text className="text-2xl font-bold">E-commerce</Text>

        {/* Top card */}
        <View className="flex h-40 w-full items-center justify-evenly rounded-xl bg-[#3b82f6]">
          <Text className="text-center font-bold text-white">
            Olá, somos a LP Inovações Tecnológicas, o maior e-commerce de
            tecnologia no país!
          </Text>
          <Text className="text-white">
            Contate-nos através do número: (84) 99999-9999
          </Text>
          <TouchableOpacity className="flex h-10 w-40 items-center justify-center rounded-xl bg-white">
            <Text className="text-base">Comprar agora</Text>
          </TouchableOpacity>
        </View>

        {/* Products */}
        <View className="flex flex-col space-y-5">
          <Text className="text-center text-xl font-bold">
            Confira nossos produtos
          </Text>

          <ScrollView>
            {products.map((product) => (
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                key={product.id}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
}
