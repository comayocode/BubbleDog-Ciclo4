import React, { useState } from "react";
import "./Dashboard.css";
import userlogin from "../../img/Dashboard/Loginuser 1.png";
import logo from "../../img/logo.svg";
import clientes from "../../img/Dashboard/clientes.svg";
import servicios from "../../img/Dashboard/servicios.svg";
import movimientos from "../../img/Dashboard/movimientos.svg";

const Dashboard = () => {
  const [btnState, setBtnstate] = useState(false);
  function eventClick() {
    setBtnstate((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? " close" : "";
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
            <li className="nav-link-bar active">
              <a href=" ">
                <img src={clientes} alt="Icono clientes" />
                <span>Clientes</span>
              </a>
            </li>
            <li className="nav-link-bar">
              <a href=" ">
                <img src={servicios} alt="Icono servicios" />
                <span>Servicios</span>
              </a>
            </li>
            <li className="nav-link-bar">
              <a href=" ">
                <img src={movimientos} alt="Icono movimientos" />
                <span>Movimientos</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="top-bar">
        <img id="user-login" src={userlogin} alt="logo ingreso de usuario" />
        <div id="sing-out">
          <a href="login.html">
            <span> Cerrar Sesión </span>
          </a>
        </div>
      </section>
      <section id="clientes">
        <div className="text">Lista de Clientes</div>
        <button
          type="submit"
          className="btn btn-warning-dash"
          data-bs-toggle="modal"
          data-bs-target="#form"
        >
          Añadir
        </button>
        <div>
          <table className="table table-dark table-striped">
            {/* <!--Encabezado--> */}
            <thead>
              {/* <!--Fila--> */}
              <tr>
                {/* <!--Columna--> */}
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Celular</th>
                <th>Correo electrónico</th>
                <th>Mascota</th>
                <th>Raza</th>
                <th>Vacuna</th>
                <th>Observación</th>
                <th className="acciones">Acciones</th>
              </tr>
            </thead>
            {/* <!--Cuerpo--> */}
            <tbody className="tbody"></tbody>
          </table>
        </div>
      </section>
      {/* <!-- Modal Eliminar--> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar Cliente
              </h5>
            </div>
            <div className="modal-body">
              <span>¿Seguro que quiere eliminar el Cliente?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Eliminar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Editar y Añadir --> */}
      <form
        className="modal fade"
        id="form"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="title">
                xx
              </h5>
            </div>
            <div className="modal-body">
              <p>Cédula</p>
              <input
                type="text"
                className="form-control-dash"
                name="cedula"
                id="cedula"
              />
              <p>Nombres</p>
              <input
                type="text"
                className="form-control-dash"
                name="nombre"
                id="nombre"
              />
              <p>Apellidos</p>
              <input
                type="text"
                className="form-control-dash"
                name="apellido"
                id="apellido"
              />
              <p>Celular</p>
              <input
                type="text"
                className="form-control-dash"
                name="celular"
                id="celular"
              />
              <p>Correo Electrónico</p>
              <input
                type="text"
                className="form-control-dash"
                name="correo"
                id="correo"
              />
              <div id="msg"></div>
              <p>Mascota</p>
              <input
                type="text"
                className="form-control-dash"
                name="nombreMascota"
                id="nombre-mascota"
              />
              <p>Raza</p>
              <input
                type="text"
                className="form-control-dash"
                name="razaMascota"
                id="raza-mascota"
              />
              <p>Vacuna</p>
              <input
                type="text"
                className="form-control-dash"
                name="mascotaVacunada"
                id="mascota-vacunada"
              />
              <p>Observación</p>
              <input
                type="text"
                className="form-control-dash"
                name="observacion"
                id="observacion"
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                id="add"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              ></button>
              <button
                type="button"
                id="cancel"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
