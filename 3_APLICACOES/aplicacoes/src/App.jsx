import {useState } from 'react';
import './App.css'

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const  cars = [
    {id: 1, brand: "ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

  const people = [
    {cpf: 1, nome: "Isabela", idade: 19, profissao: "Estudante"},
    {cpf: 2, nome: "Luciana", idade: 50, profissao: "Professora"},
    {cpf: 3, nome: "Lucio", idade: 57, profissao: "Farmacêutico"},
    {cpf: 4, nome: "Braguinha", idade: 5, profissao: "Cachorrinha"}
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/*Props*/}
      <ShowUserName name={userName} />

      {/*Destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

      {/*Reapproveitamento*/}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand = {car.brand}  
          color={car.color} 
          newCar = {car.newCar} 
          km={car.km} 
        />
      ))}

      {/*Fragment*/}
      <Fragment propFragment= "teste"/>

      {/*Children*/}
      <Container>
        <p>E este é o conteúdo</p>
      </Container>

      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage}/>

      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>


      {people.map((person) => (
        <UserDetails
          key = {person.cpf}
          nome= {person.nome}
          idade={person.idade}
          profissao={person.profissao}
        />
      ))}
    </div>
  )
}

export default App
