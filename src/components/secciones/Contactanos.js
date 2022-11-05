import React from "react";
import "./Contactanos.css";
import Map from "./Map.js";
import point from "../../img/Contactanos/GridPuntos_2.svg";
import triangle from "../../img/Contactanos/Polygon 1.svg";
import casa from "../../img/Contactanos/casa-perro.svg";
import dogMap from "../../img/Contactanos/perro_encima_de_mapa-tiny.png";
const contactanos = () => {
  return (
    <div>
      <section id="main-contactanos">
        <h2 className="text-center">Contáctanos</h2>
        <img id="point-decoration2" src={point} alt="Puntos decorativos" />
        <img id="triangle-blue" src={triangle} alt="Triangulo decorativo" />
        <div id="direction">
          <img id="logo-casa" src={casa} alt="Logo ubicación mascotas" />
          <p id="text-direction">
            99 Caven Point Rd Jersey City, NJ 07305 - EEUU.
          </p>
        </div>
        <img src={dogMap} id="dog-map" alt="Perro decorativo encima del mapa" />
        <Map />
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            type="number"
            placeholder="Celular:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Correo:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            id="msj"
            type="text"
            placeholder="Mensaje (Opcional):"
            aria-label="default input example"
          />
          <button type="submit" className="btn btn-warning">
            Enviar datos
          </button>
        </form>
      </section>
    </div>
  );
};

export default contactanos;
