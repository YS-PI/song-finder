import React from "react";
import "./style.css";
import music from "../../images/illustration-hero.svg";
import useLetras from "../../hooks/useLetras";
import { useState } from "react";

const Formulario = () => {
  const { setAlerta, busquedaLetra } = useLetras();

  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Coloca el nombre del artista y canción");
      return;
    }
    busquedaLetra(busqueda);
  };

  return (
    <form className="section" onSubmit={handleSubmit}>
      <div className="section__figure">
        <img src={music} className="section__figure__img" alt="Music Header" />
      </div>
      <div className="section__text">
        <h1 className="section__text__title">
          Buscador de letras de canciones
        </h1>
      </div>
      <div className="section__btn">
        <input
          type="text"
          placeholder="Ingrese Artista"
          name="artista"
          className="section_inputs"
          value={busqueda.artista}
          onChange={(e) =>
            setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Ingrese Canción"
          name="cancion"
          className="section_inputs"
          value={busqueda.cancion}
          onChange={(e) =>
            setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input type="submit" className="section__btn1" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
