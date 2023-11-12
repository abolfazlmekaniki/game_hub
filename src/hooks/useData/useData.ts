import { useEffect, useState } from "react";
import api_client from "../../services/api_client";
import { CanceledError } from "axios";


export interface platforms {
    id:number,
    name:string,
    slug:string
}


interface FetchData<T>{
    count:number;
    results:T[];
}


const useData =<T>(endpoint:string)=>{
    
    const [data,setData]= useState<T[]>([]);
    const [error,Seterror] = useState('');
    const [isloading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController()
        api_client.get<FetchData<T>>(endpoint,{signal:controller.signal})
        .then(res=>{
            
            setData(res.data.results)
            setLoading(false);
        })
        .catch(err=>{
            if(err instanceof CanceledError) return;
            Seterror(err.message)});
            setLoading(false);

        return ()=> controller.abort()
    },[])


    return {data,error,isloading};

}

export default useData