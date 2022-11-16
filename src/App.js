import logo from './logo.svg';
import './App.css';
import Sidenav from './sidenav';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ActorComponent from './ActorComponent';
import FilmComponent from './FilmComponent';
import CountryComponent from './CountryComponent';
import FilmQuiz from './FilmQuiz';


function App() {
  return (
    <>
    <Sidenav />
    <FilmQuiz />
  </>
   
  );
}

export default App;
