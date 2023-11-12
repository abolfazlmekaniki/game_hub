import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/Navigarion/Nav'
import GameGrid from './components/Gamegrid/Gamegrid'
import GenreList from './components/GenresList/GenresList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres/useGenres'
import PlatformsSelector from './components/PlatformsSelector/PlatformsSelector'
function App() {

  const [selectedgenre,setSelectedGenre] = useState<Genre|null>(null);
  
  console.log(selectedgenre);

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
        <GenreList selectedgenre={selectedgenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
      </GridItem>
    </Show>
    <GridItem area="main">
      <PlatformsSelector/>
      <GameGrid selectedgenre={selectedgenre}/>
    </GridItem>
  </Grid>

)
  
}

export default App
