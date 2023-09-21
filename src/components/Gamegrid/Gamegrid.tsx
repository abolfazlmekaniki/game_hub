import { useEffect, useState } from "react"
import api_client from "../../services/api_client"
import { Text } from "@chakra-ui/react";

interface Game{
    id:number;
    name:string
}

interface FetchGame{
    count:number;
    results:Game[];
}

function GameGrid() {
    const [games,setGames]= useState<Game[]>([]);
    const [error,Seterror] = useState('');

    useEffect(()=>{
        api_client.get<FetchGame>('./games')
        .then(res=>setGames(res.data.results))
        .catch(err=>Seterror(err.message));
    },[])

return(
    <>
    {error && <Text>{error}</Text>}
    {!error && <ul>
        {games.map(game=>(
            <li key={game.id}>{game.name}</li>
        ))}
    </ul>}
    </>
)
  
}

export default GameGrid
