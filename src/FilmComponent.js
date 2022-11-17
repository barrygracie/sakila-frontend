import FilmService from "./FilmService";

async function filmComponent() {
  
  const film = (await FilmService.getFilm()).data;
  console.log(film);
  return film;
}

export default filmComponent;