import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="wrapper">
        {/* Contenedor de título y texto */}
        <div className="content">
          <h1 className="welcome-title">Bienvenido a la Página</h1>
          <p className="welcome-text">
            Aquí puedes explorar diferentes vistas de la página. Elige la opción que desees.
          </p>
        </div>

        {/* Contenedor de los botones */}
        <div className="button-container">
          <Link to="/user" className="welcome-button">
            Vista Usuario
          </Link>
          <Link to="/admin" className="welcome-button">
            Vista Administrador
          </Link>
          <Link to="/documentation" className="welcome-button">
            Documentación
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
