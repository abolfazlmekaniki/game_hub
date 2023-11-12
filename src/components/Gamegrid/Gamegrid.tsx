import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GmaeCardComponent from "../GameCardComponents";
import { Genre } from "../../hooks/useGenres/useGenres";

interface props {
    selectedgenre : Genre | null
}

function GameGrid({selectedgenre}:props) {
    const{data,error,isloading}=useGames(selectedgenre);
    const skeleton = [1,2,3,4,5,6];

return(
    <>
    {error && <Text>{error}</Text>}

    {!error && 
     <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} spacing={10} padding={20}>

        {isloading && skeleton.map(i=> <GmaeCardComponent key={i}>
            <GameCardSkeleton />
        </GmaeCardComponent>
        )}

        {data.map(game=>(
            <GmaeCardComponent key={game.id}>
                <GameCard  games={game} />
            </GmaeCardComponent>
        ))}
    </SimpleGrid>}
    </>
)
  
}

export default GameGrid
