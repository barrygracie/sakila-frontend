import React, {useState, useEffect} from 'react'
import FilmService from './FilmService';

function FilmComponent() {

    const [film, setFilm] = useState([])

    useEffect(() => {
        getFilm()
    }, [])

    const getFilm = () => {

        FilmService.getFilm().then((response) => {
            setFilm(response.data)
            
        });
    };

    return (film        
    )
}

export default FilmComponent