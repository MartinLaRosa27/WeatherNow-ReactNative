import React from "react";
import { View, Text, Image } from "react-native";
import { useClima } from "../hook/useClima";
const { climaStyles } = require("../../styles");

export const Clima = () => {
  // ---------------------------------------------------------------------
  const { clima } = useClima();

  // ---------------------------------------------------------------------
  return (
    <>
      {clima !== null && (
        <View>
          <View style={climaStyles.container}>
            <Text style={climaStyles.texto}>
              {parseInt(clima.main.temp - 273.15)}
              <Text style={climaStyles.temperatura}>&#x2103;</Text>
              <Image
                style={climaStyles.img}
                source={{
                  uri: `http://openweathermap.org/img/w/${clima.weather[0].icon}.png`,
                }}
              />
            </Text>
          </View>

          <View style={climaStyles.temperaturas}>
            <Text style={[climaStyles.tempProm, climaStyles.min]}>
              Temp. Min. {parseInt(clima.main.temp_min - 273.15)}&#x2103;
            </Text>
            <Text style={[climaStyles.tempProm, climaStyles.max]}>
              Temp. Max. {parseInt(clima.main.temp_max - 273.15)}&#x2103;
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
