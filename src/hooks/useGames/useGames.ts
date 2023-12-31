import { GameQuery } from "../../App";
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
    metacritic:number;
    rating_top:number
}


const useGames = (gameQuery:GameQuery)=> useData<Game>('./games',{params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchtext}},[gameQuery]);

export default useGames