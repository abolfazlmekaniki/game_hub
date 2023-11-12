import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/Navigarion/Nav'
import GameGrid from './components/Gamegrid/Gamegrid'
import GenreList from './components/GenresList/GenresList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres/useGenres'
import PlatformsSelector from './components/PlatformsSelector/PlatformsSelector'
import { platforms } from './hooks/useData/useData'



export interface GameQuery {
  genre : Genre | null;
  platform : platforms | null
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
      <PlatformsSelector onselectedplatforms={(platform)=>setGameQuery({...gameQuery,platform})}/>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>

)
  
}

export default App
