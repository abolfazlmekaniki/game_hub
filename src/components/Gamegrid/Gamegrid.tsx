import { SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GmaeCardComponent from "../GameCardComponents";


function GameGrid() {
    const{data,error,isloading}=useGames();
    const skeleton = [1,2,3,4,5,6];

return(
    <>
    {error && <Text>{error}</Text>}

    {!error && 
     <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:5}} spacing={10} padding={20}>

        {isloading && skeleton.map(i=> <GmaeCardComponent>
            <GameCardSkeleton key={i}/>
        </GmaeCardComponent>
        )}

        {data.map(game=>(
            <GmaeCardComponent>
                <GameCard  games={game} key={game.id}/>
            </GmaeCardComponent>
        ))}
    </SimpleGrid>}
    </>
)
  
}

export default GameGrid
