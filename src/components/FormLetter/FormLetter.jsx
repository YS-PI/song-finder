import React from "react";
import "./styles.css";
import music from "../../images/illustration-hero.svg";

const FormLetter = ({ children }) => {
  return (
    <div className="sectionFormLetter">
      <div className="section__figure">
        <img src={music} className="section__figure__img" alt="Music Header" />
      </div>
      {children}
    </div>
  );
};

export default FormLetter;
