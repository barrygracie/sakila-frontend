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
            
        });
    };

    return (country  
    )
}

export default CountryComponent