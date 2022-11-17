import CountryService from './CountryService';

async function countryComponent() {

    const country = (await CountryService.getCountry()).data;
    console.log(country);
    return country;
}

export default countryComponent;