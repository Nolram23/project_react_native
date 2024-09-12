import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.divLogo}>
        <Image
          source={require("./assets/logo.png")} // Asegúrate de que el nombre del archivo y la ruta sean correctos
          style={styles.logo}
        />
      </View>
      <View style={styles.container}>
        <Text>Hola mundo cruel !</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divLogo: {
    padding: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100, // Ajusta según el tamaño de tu logo
    resizeMode: "contain",
  },
});
