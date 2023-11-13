import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres/useGenres";
import React from "react";


interface props{
    onSelectedGenre:(genre:Genre)=>void;
    selectedgenre:Genre|null
}

const GenreList:React.FC<props> = ({selectedgenre,onSelectedGenre})=>{
    
    const {data,isloading,error}= useGenres();
    
    if(error) return null

    if(isloading) return <Spinner />

    return (
        <>
            <Heading fontSize='xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre=>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image objectFit='cover' src={genre.image_background} boxSize='32px' borderRadius={8}/>
                        <Button whiteSpace='normal' textAlign='left' fontWeight={selectedgenre?.id===genre.id?'bold':'normal'} variant='link' onClick={()=>onSelectedGenre(genre)} fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )

}

export default GenreList