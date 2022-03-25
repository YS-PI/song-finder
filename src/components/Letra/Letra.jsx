import React from "react";
import useLetras from "../../hooks/useLetras";
import "./styles.css";
import iconMusic from "../../images/icon-music.svg";

const Letra = () => {
  const { letra, cargando } = useLetras();
  return cargando ? (
    <div className="container__rotate">
      <img src={iconMusic} alt="Icon Music" className="rotate" />
    </div>
  ) : (
    <div className="letter">{letra}</div>
  );
};

export default Letra;
