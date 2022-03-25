import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const LetrasConetxt = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [letra, setLetra] = useState("");
  const [cargando, setCargando] = useState(false);

  const busquedaLetra = async (busqueda) => {
    setCargando(true);
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      setLetra(data.lyrics);
      setAlerta("");
    } catch (error) {
      setAlerta("Canción no encontrada");
    }
    setCargando(false);
  };

  return (
    <LetrasConetxt.Provider
      value={{
        alerta,
        letra,
        cargando,
        busquedaLetra,
        setAlerta,
      }}
    >
      {children}
    </LetrasConetxt.Provider>
  );
};

export { LetrasProvider };
export default LetrasConetxt;
