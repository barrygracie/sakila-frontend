import axios from 'axios';

const CountryURL = 'http://localhost:8080/home/randomCountry';

class CountryService{
    getCountry(){
        return axios.get(CountryURL);
    }
}

export default new CountryService();