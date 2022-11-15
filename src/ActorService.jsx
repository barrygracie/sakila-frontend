import axios from 'axios';

const ActorURL = 'http://localhost:8080/home/selectActor';

class ActorService{
    getActors(){
        return axios.get(ActorURL);
    }
}

export default new ActorService();