import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Productos from "./components/Productos";

function App() {
  return (
    <Router>
      <div className="navbar bg-dark border border-danger rounded-bottom">
        <div className="btn-group ">
          <Link exact to="/" className="btn btn-dark">
            Home <i class="fa-solid fa-house"></i>
          </Link>
          <NavLink to="/productos" className="btn btn-dark">
            Productos <i class="fa-solid fa-mortar-pestle"></i>
          </NavLink>
          <NavLink to="/contacto" className="btn btn-dark">
            Contacto <i class="fa-solid fa-envelope"></i>
          </NavLink>
        </div>
        <div className="d-flex text-white">
          <h5>Pastelería Sabores</h5>
        <img src="https://cdn-icons-png.flaticon.com/512/2123/2123001.png" alt="" width="40px" height="40px" className="p-1"/>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
