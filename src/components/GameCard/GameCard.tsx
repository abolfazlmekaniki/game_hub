import { Card,CardBody,Heading,Image, Text } from "@chakra-ui/react"
import { Game } from "../../hooks/useGames/useGames"
import PlatformIcon from "../PlatformIcon"


interface props{
    games:Game
}


const GameCard:React.FC<props> = ({games}):JSX.Element=>{
    
// height={["259px", "178px", "166.27px","122.1px"]} width={["298.30px", "377.35px", "166.27px","122.1px"]}
return(
    <Card borderRadius={10} overflow="hidden">
        <Image src={games.background_image} height={["259px", "178px", "166.27px","122.1px"]} />
        <CardBody>
            <Heading fontSize='1xl' >{games.name}</Heading>
            <PlatformIcon platforms={games.parent_platforms.map(p=>p.platform)}/> 
        </CardBody>
    </Card>
)
  
}

export default GameCard
