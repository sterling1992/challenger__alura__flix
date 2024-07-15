

import "../assets/css/Boton.css";
import React from "react";
import PropTypes from "prop-types";

const Boton = ({ nombre, color, onClick }) => {
  return (
    <button
      style={{backgroundColor: color}}
      className="boton__crear__and__limpiar"
      onClick={onClick}
    >
      {nombre}
    </button>
  );
};

Boton.propTypes = {
  nombre: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Boton;
