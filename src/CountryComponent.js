import React, {useState, useEffect} from 'react'
import CountryService from './CountryService';

function CountryComponent() {

    const [country, setCountry] = useState([])

    useEffect(() => {
        getCountry()
    }, [])

    const getCountry = () => {

        CountryService.getCountry().then((response) => {
            setCountry(response.data)
            console.log(response.data);
        });
    };

    return (
        <div>Hello
            

        </div>
    )
}

export default CountryComponent