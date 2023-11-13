import { Grid, GridItem,HStack,Show } from '@chakra-ui/react'
import NavBar from './components/Navigarion/Nav'
import GameGrid from './components/Gamegrid/Gamegrid'
import GenreList from './components/GenresList/GenresList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres/useGenres'
import PlatformsSelector from './components/PlatformsSelector/PlatformsSelector'
import { platforms } from './hooks/useData/useData'
import SortSelector from './components/SortSelector/sortselector'



export interface GameQuery {
  genre : Genre | null;
  platform : platforms | null;
  sortOrder:string
}

function App() {

  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);
  

  function platform(platforms: platforms | null) {
    throw new Error('Function not implemented.')
  }

return(

  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}
  templateColumns={{
    base:'1fr',
    lg:"200px 1fr"
  }}
  >
    <GridItem area="nav">
      <NavBar></NavBar>
    </GridItem>
    <Show above='lg'>
      <GridItem area="aside" paddingX={5}>
        <GenreList selectedgenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
    </Show>
    <GridItem area="main">
        <HStack spacing={5} paddingLeft='80px'>
        <PlatformsSelector onselectedplatforms={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <SortSelector selectedsort={gameQuery.sortOrder} onSelectsort={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>

)
  
}

export default App
