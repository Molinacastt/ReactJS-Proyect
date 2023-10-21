import React, { Component } from "react";
import CartWidget from "./CartWidget/CartWidget";
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <h3>Nala</h3>
        <div className="links">
            <button className="btn-nav">Inicio</button>
            <button className="btn-nav">Informacion</button>
            <button className="btn-nav">Contacto</button>
        </div >
        <CartWidget className='wid'/>
      </nav>
    );
  }
}

