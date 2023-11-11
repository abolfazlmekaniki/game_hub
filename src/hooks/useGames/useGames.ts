import { useEffect, useState } from "react";
import api_client from "../../services/api_client";
import { CanceledError } from "axios";


export interface platforms {
    id:number,
    name:string,
    slug:string
}

export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms :{platform:platforms}[]
}

interface FetchGame{
    count:number;
    results:Game[];
}


const useGames = ()=>{
    
    const [games,setGames]= useState<Game[]>([]);
    const [error,Seterror] = useState('');

    useEffect(()=>{
        const controller = new AbortController()
        api_client.get<FetchGame>('./games',{signal:controller.signal})
        .then(res=>setGames(res.data.results))
        .catch(err=>{
            if(err instanceof CanceledError) return;
            Seterror(err.message)});

        return ()=> controller.abort()
    },[])


    return {games,error};

}

export default useGames