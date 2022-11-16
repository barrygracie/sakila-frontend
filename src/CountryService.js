import axios from 'axios';

const CountryURL = 'https://demo-1668596797552.azurewebsites.net/home/randomCountry';

class CountryService{
    getCountry(){
        return axios.get(CountryURL);
    }
}

export default new CountryService();