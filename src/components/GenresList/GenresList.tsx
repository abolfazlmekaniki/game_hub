import { useEffect, useState } from "react";
import api_client from "../../services/api_client";
import { CanceledError } from "axios";
import useGenres, { Genre } from "../../hooks/useGenres/useGenres";
import { list } from "@chakra-ui/react";
import useData from "../../hooks/useData/useData";

const GenreList = ()=>{
    
    const {data}= useGenres();
    


    return (
        <ul>
            {data.map(genre=><li>{genre.name}</li>)}
        </ul>
    )

}

export default GenreList