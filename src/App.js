import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';
import Sidenav from './sidenav';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ActorComponent from './ActorComponent';
import FilmComponent from './FilmComponent';
import CountryComponent from './CountryComponent';


function App() {
  return (
    <>
    <Sidenav />
    <Quiz />

  </>
   
  );
}

export default App;
