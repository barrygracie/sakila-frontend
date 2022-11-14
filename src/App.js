import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';
import Sidenav from './sidenav';
import GuessCountry from './guessCountry';
import GuessFilm from './guessFilm';

function App() {
  return (
    <>
     <Sidenav />
      <GuessCountry />
      <h1>Placeholder</h1>
      <GuessFilm />
    </>
   
  );
}

export default App;
