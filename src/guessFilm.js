import { useEffect, useState } from "react";


export default function GuessFilm(){
    const [error, setError] = useState(null);
    const [films, setFilms] = useState("");

    useEffect(() => {
        fetch ("http://localhost:8080/home/films/7")
        .then(res => res.json())
        .then(films => {
            setFilms(films);
        },
        error => {
            setError(error);
        }
        )
    },[])
    if(error){
        return <div>Error Loading</div>
    } else{

        return(
            <div> 
            {JSON.stringify(films)}
            <div>Film Name: {films.title}</div>
            <div>Film Description: {films.description}</div>
            <div>Film Actors: </div>
            <div>Film Rating: {films.rating}</div>
             </div>
        )
    }
}
