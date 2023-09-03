import Main from "./src/views/index";

// fonts
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Index() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
    Comfortaa_400Regular,
    Comfortaa_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return <Main />;
}
