import React, { useState } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useClima } from "../hook/useClima";
const { formulario } = require("../../styles");

export const Formulario = () => {
  // ---------------------------------------------------------------------
  const { busqueda, setBusqueda, validacionBusqueda } = useClima();

  // ---------------------------------------------------------------------
  const [animacionBoton] = useState(new Animated.Value(1));

  // ---------------------------------------------------------------------
  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  // ---------------------------------------------------------------------
  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // ---------------------------------------------------------------------
  const estiloAnimacion = {
    transform: [{ scale: animacionBoton }],
  };

  // ---------------------------------------------------------------------
  return (
    <View style={formulario.container}>
      <View>
        <TextInput
          placeholder="Ciudad..."
          placeholderTextColor="#666"
          style={formulario.input}
          value={busqueda.ciudad}
          onChangeText={(ciudad) => setBusqueda({ ...busqueda, ciudad })}
        />
        <Picker
          selectedValue={busqueda.pais}
          style={formulario.picker}
          onValueChange={(pais) => setBusqueda({ ...busqueda, pais })}
        >
          <Picker.Item label="--- Seleccione un País ---" value="" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="México" value="MX" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="Perú" value="PE" />
          <Picker.Item label="Ecuador" value="EC" />
        </Picker>
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => validacionBusqueda()}
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
        >
          <Animated.View style={[formulario.btnBuscar, estiloAnimacion]}>
            <Text style={formulario.btnTextoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
