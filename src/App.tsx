import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/Navigarion/Nav'
import GameGrid from './components/Gamegrid/Gamegrid'
import GenreList from './components/GenresList/GenresList'
function App() {
  
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
        <GenreList/>
      </GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid/>
    </GridItem>
  </Grid>

)
  
}

export default App
