import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./sidenav";
import React from "react";
import ReactDOM from "react-dom/client";
import FilmQuiz from "./FilmQuiz";
import DescriptionQuiz from "./DescriptionQuiz";
import CountryQuiz from "./CountryQuiz";

function App() {
  return (
    <>
    <Sidenav />
      <h1>Sakila Quiz Games</h1>

      <br></br>

      <div id="one">
      <h1>Film Title Quiz</h1>
      <br></br>
      <p>On the left is the title of a film, select the correct description from the choices on the right</p>
      <FilmQuiz />
      <br></br><br></br><br></br>
      </div>

      <br></br><br></br><br></br><br></br>

      <div id="two">
      <h1>Film Description Quiz</h1>
      <br></br>
      <p>On the left is the description of a film, select the correct film title from the choices on the right</p>
      <DescriptionQuiz />
      <br></br><br></br><br></br>
      </div>

      <br></br><br></br><br></br><br></br>

      <div id="three">
      <h1>Geography Quiz</h1>
      <br></br>
      <p>Guess the correct country for the city shown on the left</p>
      <CountryQuiz />
      <br></br><br></br><br></br>
      </div>

      <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      
    </>
  );
}

export default App;