import { Button, HStack, Image, Link, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres/useGenres";
import React from "react";


interface props{
    onSelectedGenre:(genre:Genre)=>void
}

const GenreList:React.FC<props> = ({onSelectedGenre})=>{
    
    const {data,isloading,error}= useGenres();
    
    if(error) return null

    if(isloading) return <Spinner />

    return (
        <List>
            {data.map(genre=>
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image src={genre.image_background} boxSize='32px' borderRadius={8}/>
                    <Button variant='link' onClick={()=>onSelectedGenre(genre)} fontSize='lg'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )

}

export default GenreList