import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import Cars from "./components/Cars";

function App() {
  const n = 15;
  const [name] = useState("Isabela");

  const cars = [
    { id: 1, brand: "ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "McLaren", color: "Laranja", newCar: true, km: 50000 },
    { id: 3, brand: "RedBull", color: "Azul", newCar: false, km: 63200 }
  ];

  const redTitle = true;

  return (
    <div className="App">
      {/*CSS GLOBAL*/}
      <h1>React com CSS</h1>

      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/*Inline CSS dinâmico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Isabela"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>

      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>

      {/*CSS Modules*/}
      <Title />


      {cars.map((car) => (
        <Cars 
        key= {car.id}
        brand= {car.brand}
        color = {car.color}
        newCar = {car.newCar}
        km = {car.km}/>
      ))}
    </div>
  );
}

export default App;
