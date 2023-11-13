import { Card,CardBody,HStack,Heading,Image, Text } from "@chakra-ui/react"
import { Game } from "../../hooks/useGames/useGames"
import PlatformIcon from "../PlatformIcon"
import CriticScore from "../CriticScore"
import get_img_url from "../../services/img-url"
import Emoji from "../Emoji/Emoji"


interface props{
    games:Game
}


const GameCard:React.FC<props> = ({games}):JSX.Element=>{
    
// height={["259px", "178px", "166.27px","122.1px"]} width={["298.30px", "377.35px", "166.27px","122.1px"]}
return(
    <Card >
        <Image src={get_img_url(games.background_image)} height={["259px", "178px", "166.27px","122.1px"]} />
        <CardBody>
            <Heading fontSize='1xl' >{games.name}</Heading>
            <HStack justify="space-between">
            <PlatformIcon platforms={games.parent_platforms.map(p=>p.platform)}/>
            <CriticScore CriticScore={games.metacritic}/> 
            </HStack>
            <Emoji rating={games.rating_top}/>
        </CardBody>
    </Card>
)
  
}

export default GameCard
