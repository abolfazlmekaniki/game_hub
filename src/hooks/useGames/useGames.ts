import useData from "../useData/useData";
import { Genre } from "../useGenres/useGenres";

export interface platforms {
    id:number,
    name:string,
    slug:string
}

export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms :{platform:platforms}[];
    metacritic:number
}


const useGames = (selectedgenre:Genre|null)=> useData<Game>('./games',{params:{genres:selectedgenre?.id}},[selectedgenre?.id]);

export default useGames