import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.svg";
import email from "../../img/Login/email.svg";
import whats from "../../img/Login/whatsapp.svg";
import ig from "../../img/Login/instagram.svg";
import call from "../../img/Login/llamada.svg";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [miUser, setMiUser] = useState("");
  const [miPass, setMiPass] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    let usuario = document.getElementById("txtusu").value;
    let contrasena = document.getElementById("txtpass").value;
    if (usuario.length === 0 || contrasena.length === 0) {
      alert("Complete los datos de manera correcta");
    } else {
      if (miUser === "admin" && miPass === "123") {
        setMiLogin("true");
        document.getElementById("elem_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error de usuario y/o contraseña!!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpass").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div>
      <section id="elem_login">
        <header id="header-login">
          <Link id="logo" to="/">
            <img src={logo} className="img-fluid" alt="Logo Spa BubbleDog" />
          </Link>
        </header>
        <section id="section-login">
          <h1>Login</h1>
          <form>
            <input
              id="txtusu"
              onChange={(e) => setMiUser(e.target.value)}
              className="form-area"
              type="text"
              placeholder="Usuario:"
              aria-label="default input example"
            />
            <input
              id="txtpass"
              onChange={(e) => setMiPass(e.target.value)}
              className="form-area"
              type="password"
              placeholder="Contraseña:"
              aria-label="default input example"
            />
            <button
              type="submit"
              className="btn btn-warning login"
              onClick={iniciarSesion}
            >
              Ingresar
            </button>
          </form>
        </section>
        <section id="bienvenido">
          <h2>¡Bienvenido!</h2>
          <p>Ingresa tus credenciales para entrar al dashboard</p>
          <Link className="icon">
            <img src={email} alt="Icono email" />
          </Link>
          <Link className="icon">
            <img src={whats} alt="Icono whatsapp" />
          </Link>
          <Link className="icon">
            <img src={ig} alt="Icono instagram" />
          </Link>
          <Link className="icon">
            <img src={call} alt="Icono llamada" />
          </Link>
        </section>
      </section>
      {miLogin === "true" && <Dashboard />}
    </div>
  );
};

export default Login;
