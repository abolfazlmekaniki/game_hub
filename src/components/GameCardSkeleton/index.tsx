import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const  GameCardSkeleton:React.FC = ():JSX.Element=>{
    


return(
   <Card>
        <Skeleton height={["259px", "178px", "166.27px","122.1px"]}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
   </Card>
)
  
}

export default GameCardSkeleton
