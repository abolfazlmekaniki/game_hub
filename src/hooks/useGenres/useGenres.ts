import { useEffect, useState } from "react";
import api_client from "../../services/api_client";
import { CanceledError } from "axios";


export interface platforms {
    id:number,
    name:string,
    slug:string
}

export interface Genre{
    id:number;
    name:string;
}

interface FetchGenres{
    count:number;
    results:Genre[];
}


const useGenres = ()=>{
    
    const [genres,setGenres]= useState<Genre[]>([]);
    const [error,Seterror] = useState('');
    const [isloading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController()
        api_client.get<FetchGenres>('./games',{signal:controller.signal})
        .then(res=>{
            
            setGenres(res.data.results)
            setLoading(false);
        })
        .catch(err=>{
            if(err instanceof CanceledError) return;
            Seterror(err.message)});
            setLoading(false);

        return ()=> controller.abort()
    },[])


    return {genres,error,isloading};

}

export default useGenres