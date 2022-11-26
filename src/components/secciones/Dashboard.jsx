import React, { useState } from "react";
import "./Dashboard.css";
import DashClientes from "./DashClientes";
import DashServicios from "./DashServicios";
import DashMovimientos from "./DashMovimientos";
import userlogin from "../../img/Dashboard/Loginuser 1.png";
import logo from "../../img/logo.svg";
import clientes from "../../img/Dashboard/clientes.svg";
import servicios from "../../img/Dashboard/servicios.svg";
import movimientos from "../../img/Dashboard/movimientos.svg";

const Dashboard = () => {
  const [btnState, setBtnstate] = useState(false);
  const [EvtPop, setEvtPop] = useState(false);
  //Funcion del menu hamburguesa
  function eventClick() {
    setBtnstate((btnState) => !btnState);
  }
  function eventPop() {
    setEvtPop((EvtPop) => !EvtPop);
  }
  let toggleClassCheck = btnState ? " close" : "";
  let pop = EvtPop ? " pop" : "";

  const [vistaClientes, setVistaClientes] = useState("");
  const [vistaServicios, setVistaServicios] = useState("ocultar");
  const [vistaMovimientos,setVistaMovimientos]= useState("ocultar")

  return (
    <div id="div-dash">
      <nav className={`sidebar${toggleClassCheck}`}>
        <header>
          <div className="image-text">
            <button id="menu-hambur" onClick={eventClick}>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <span className="image toggle" onClick={eventClick}>
              <img src={logo} alt="Logo" />
            </span>
            <div className="text header-text">
              <span className="name">BubbleDog</span>
            </div>
          </div>
        </header>
        <div className="menu-bar">
          <ul className={`menu-link${toggleClassCheck}`}>
            <li
              className="nav-link-bar"
              onClick={() => {
                setVistaServicios("ocultar");
                setVistaClientes("");
              }}
            >
              <img src={clientes} alt="Icono clientes" />
              <span>Clientes</span>
            </li>
            <li
              className="nav-link-bar"
              onClick={() => {
                setVistaClientes("ocultar");
                setVistaServicios("");
                setVistaMovimientos("ocultar")
              }}
            >
              <img src={servicios} alt="Icono servicios" />
              <span>Servicios</span>
            </li>
            <li className="nav-link-bar"
            onClick={() => {
              setVistaClientes("ocultar");
              setVistaServicios("ocultar");
              setVistaMovimientos("");
            }}
            >
              <img src={movimientos} alt="Icono movimientos" />
              <span>Movimientos</span>
            </li>
          </ul>
        </div>
      </nav>
      <section id="top-bar">
        <img
          id="user-login"
          src={userlogin}
          alt="logo ingreso de usuario"
          onClick={eventPop}
        />
        <div id="sing-out" className={`${pop}`}>
          <a href=" " onClick={() => window.location.reload()}>
            <span> Cerrar Sesión </span>
          </a>
        </div>
      </section>
      <section id="clientes" className={`${vistaClientes}`}>
        <DashClientes />
      </section>
      <section id="servicios" className={`${vistaServicios}`}>
        <DashServicios />
      </section>
      <section id="movimientos" className={`${vistaMovimientos}`}>
        <DashMovimientos/>
      </section>
    </div>
  );
};

export default Dashboard;
