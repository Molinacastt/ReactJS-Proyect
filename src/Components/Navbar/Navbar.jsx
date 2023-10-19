import React, { Component } from "react";
import CartWidget from "./CartWidget/CartWidget";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h3>Nala</h3>
        <div className="links">
            <button>Inicio</button>
            <button>Informacion</button>
            <button>Contacto</button>
        </div>
        <CartWidget />
      </nav>
    );
  }
}

