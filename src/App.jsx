import React from "react";
import Alerta from "./components/Alerta/Alerta";
import FormLetter from "./components/FormLetter/FormLetter";
import Formulario from "./components/Formulario/Formulario";
import Letra from "./components/Letra/Letra";
import useLetras from "./hooks/useLetras";
import iconMusic from "./images/icon-music.svg";
const App = () => {
  const { alerta, letra, cargando } = useLetras();
  return (
    <div className="container__app">
      <Formulario />
      <FormLetter>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          <div className="container__rotate">
            <img src={iconMusic} alt="Icon Music" className="rotate" />
          </div>
        ) : (
          <p className="paragraph">Busca letras de tus artistas favoritos</p>
        )}
      </FormLetter>
    </div>
  );
};

export default App;
