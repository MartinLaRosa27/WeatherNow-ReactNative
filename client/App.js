import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { Clima } from "./src/components/Clima";
import { Formulario } from "./src/components/Formulario";
import { ClimaProvider } from "./src/context/ClimaProvider";
const { styles } = require("./styles");

export default function App() {
  // ---------------------------------------------------------------------
  return (
    <ClimaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Weather Now</Text>
        <Clima />
        <Formulario />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ClimaProvider>
  );
}
