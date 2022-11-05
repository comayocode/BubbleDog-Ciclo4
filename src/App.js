import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Inicio from "./components/secciones/Inicio";
import Nosotros from "./components/secciones/Nosotros";
import Servicios from "./components/secciones/Servicios";
import Contactanos from "./components/secciones/Contactanos";
import Footer from "./components/secciones/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contactanos />
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
