import { Heading } from '@chakra-ui/react'
import { GameQuery } from "../../App"

interface props{
    gameQuery : GameQuery
}
const GameHeading:React.FC<props> = ({gameQuery}):JSX.Element=>{

    const header= `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return(
        <Heading paddingLeft='80px' marginBottom={5}>
            {header}
        </Heading>
     )

} 

export default GameHeading