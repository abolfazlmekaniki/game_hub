import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";


function GameGrid() {
    const{games,error,isloading}=useGames();
    const skeleton = [1,2,3,4,5,6];

return(
    <>
    {error && <Text>{error}</Text>}

    {!error && 
     <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} spacing={10} padding={20}>

        {isloading && skeleton.map(i=><GameCardSkeleton key={i}/>
        )}

        {games.map(game=>(
            <GameCard  games={game} key={game.id}/>
        ))}
    </SimpleGrid>}
    </>
)
  
}

export default GameGrid
