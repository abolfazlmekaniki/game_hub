import {HStack,Switch,Text,useColorMode} from '@chakra-ui/react'
import logo from '../../assets/Logo/logo.webp'
function Switch_Mode() {
  const {toggleColorMode,colorMode}=useColorMode()
return(

    <HStack >
        <Switch colorScheme='green' isChecked={colorMode==="dark"} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>

)
  
}

export default Switch_Mode
