import axios from 'axios';

const ActorURL = 'https://demo-1668596797552.azurewebsites.net/home/random4Films';

class FilmService{
    getFilm(){
        return axios.get(ActorURL);
    }
}

export default new FilmService();