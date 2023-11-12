import { useEffect, useState } from "react";
import api_client from "../../services/api_client";
import { CanceledError } from "axios";
import useGenres from "../../hooks/useGenres/useGenres";
import { list } from "@chakra-ui/react";


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


const GenreList = ()=>{
    
    const {genres}= useGenres();
    


    return (
        <ul>
            {genres.map(genre=><li>{genre.name}</li>)}
        </ul>
    )

}

export default GenreList