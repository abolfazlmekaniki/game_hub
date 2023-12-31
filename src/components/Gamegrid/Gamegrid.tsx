import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GmaeCardComponent from "../GameCardComponents";
import { Genre } from "../../hooks/useGenres/useGenres";
import { GameQuery } from "../../App";

interface props {
    gameQuery : GameQuery;
}

function GameGrid({gameQuery}:props) {
    const{data,error,isloading}=useGames(gameQuery);
    const skeleton = [1,2,3,4,5,6];

    if(error) return <Text>{error}</Text>

return(
     <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} spacing={6} padding={20}>

        {isloading && skeleton.map(i=> <GmaeCardComponent key={i}>
            <GameCardSkeleton />
        </GmaeCardComponent>
        )}

        {data.map(game=>(
            <GmaeCardComponent key={game.id}>
                <GameCard  games={game} />
            </GmaeCardComponent>
        ))}
    </SimpleGrid>
)
  
}

export default GameGrid
