import { Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/Navigarion/Nav'
import GameGrid from './components/Gamegrid/Gamegrid'
function App() {
  
return(

  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar></NavBar>
    </GridItem>
    <Show above='lg'>
      <GridItem area="aside" >aside</GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid/>
    </GridItem>
  </Grid>

)
  
}

export default App
