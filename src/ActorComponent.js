import React, {useState, useEffect} from 'react'
import ActorService from './ActorService';

function ActorComponent() {

    const [actors, setActors] = useState([])

    useEffect(() => {
        getActors()
    }, [])

    const getActors = () => {

        ActorService.getActors().then((response) => {
            setActors(response.data)
            console.log(response.data);
        });
    };

    return (
        <div>
        {actors.actorFirstName} {actors.actorLastName}
            

        </div>
    )
}

export default ActorComponent