import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Link as NewPage } from "react-router-dom";
import logo from "../../img/NavBar/Logo.svg";
import login from "../../img/NavBar/UserLogin.svg";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  p-0 fixed-top navbar-center">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            activeClass="active"
            to="main-inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <img src={logo} className="img-fluid" alt="Logo Spa BubbleDog" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-inicio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-nosotros"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-contactanos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <NewPage id="login" to="/login">
              <img
                src={login}
                className="img-fluid"
                alt="Logo iniciar sesion"
              />
            </NewPage>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
