import { Badge} from "@chakra-ui/react"


interface props {
    CriticScore : number
}

const  CriticScore:React.FC<props> = ({CriticScore}):JSX.Element=>{
    
const color = CriticScore>90?'green':CriticScore>85?'yellow':'red'


return(
   <Badge colorScheme={color} fontSize='14px' borderRadius='4px' paddingX={2}>{CriticScore}</Badge>
)
  
}

export default CriticScore
