import { useEffect, useState } from "react";


export default function GuessCountry(){
    const [error, setError] = useState(null);
    const [cntry, setCntry] = useState("");

    useEffect(() => {
        fetch ("http://localhost:8080/home/randomCountry")
        .then(res => res.json())
        .then(cntry => {
            setCntry(cntry);
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
            <div>{cntry[0].country}</div>


        )
    }
}
