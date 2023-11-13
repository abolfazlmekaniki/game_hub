import {HStack, Image ,Text} from '@chakra-ui/react'
import logo from '../../assets/Logo/logo.webp'
import Switch_Mode from '../ColorModeSwitch/ModeSwitch'
import SearchInput from '../SearchInput/SearchInput'
function NavBar() {
  
return(

    <HStack justifyContent='space-between' padding='0px 20px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput/>
        <Switch_Mode />
    </HStack>

)
  
}

export default NavBar
