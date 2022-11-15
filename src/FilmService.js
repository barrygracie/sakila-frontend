import axios from 'axios';

const ActorURL = 'http://localhost:8080/home/randomFilm';

class FilmService{
    getFilm(){
        return axios.get(ActorURL);
    }
}

export default new FilmService();