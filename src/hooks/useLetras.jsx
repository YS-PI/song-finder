import { useContext } from "react";
import LetrasConetxt from "../context/LetrasProvider";

const useLetras = () => {
  return useContext(LetrasConetxt);
};

export default useLetras;
