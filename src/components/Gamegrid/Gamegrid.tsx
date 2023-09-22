import { useEffect, useState } from "react"
import api_client from "../../services/api_client"
import { Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";


function GameGrid() {
    const{games,error}=useGames();

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
