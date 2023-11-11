import { Box, SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../../hooks/useGames/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import { ReactNode } from "react";

interface props{
    children :ReactNode
}

function GmaeCardComponent({children}:props) {

return(
    <Box borderRadius={10} overflow="hidden">{children}</Box>
)
  
}

export default GmaeCardComponent
