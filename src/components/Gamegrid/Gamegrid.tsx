import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";


function GameGrid() {
    const{games,error}=useGames();

return(
    <>
    {error && <Text>{error}</Text>}
    {!error &&
     <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} spacing={10} padding={20}>
        {games.map(game=>(
            <GameCard  games={game} key={game.id}/>
        ))}
    </SimpleGrid>}
    </>
)
  
}

export default GameGrid
