import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemsListContainer from "./Components/Navbar/ItemsListContainer/ItemsListContainer";
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemsListContainer greeting={'Bienvenidos'}/>
        <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Contidad agregada ', quantity)}/>
    </div>
  );
}

export default App;
