import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemsListContainer from "./Components/Navbar/ItemsListContainer/ItemsListContainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemsListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
