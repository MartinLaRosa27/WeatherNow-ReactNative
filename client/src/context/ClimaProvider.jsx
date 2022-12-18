import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
const API_KEY = process.env.API_KEY;
const climaContext = createContext();

export const ClimaProvider = (props) => {
  // ---------------------------------------------------------------------
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [clima, setClima] = useState(null);

  // ---------------------------------------------------------------------
  const validacionBusqueda = () => {
    if (busqueda.ciudad.trim() === "" || busqueda.pais.trim() === "") {
      alert("Por favor, verifique los datos ingresados");
      return;
    }
    setConsultar(true);
  };

  // ---------------------------------------------------------------------
  const realizarConsulata = async () => {
    alert(API_KEY);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${API_KEY}`
      )
      .then((res) => {
        setClima(res.data);
      })
      .catch((e) => {
        alert("No hay resultados encontrados");
      });
  };

  // ---------------------------------------------------------------------
  useEffect(() => {
    if (consultar) {
      realizarConsulata();
      setConsultar(false);
    }
  }, [consultar]);

  // ---------------------------------------------------------------------
  return (
    <climaContext.Provider
      value={{ busqueda, setBusqueda, validacionBusqueda, clima, consultar }}
    >
      {props.children}
    </climaContext.Provider>
  );
};

export default climaContext;
