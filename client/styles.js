import { StyleSheet } from "react-native";

module.exports.styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d47748",
    justifyContent: "center",
  },
  titulo: {
    textAlign: "center",
    color: "#d1cfcf",
    textTransform: "capitalize",
    fontSize: 28,
  },
});

module.exports.formulario = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: "2.5%",
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: "#FFF",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 10,
  },
  picker: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: "#000",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
  btnTextoBuscar: {
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});

module.exports.climaStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  texto: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 80,
    fontWeight: "bold",
  },
  temperatura: {
    fontSize: 40,
  },
  img: {
    width: 66,
    height: 58,
  },
  temperaturas: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tempProm: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  min: {
    marginRight: 10,
    color: "#fcba03",
  },
  max: {
    color: "#c71e1e",
  },
});
