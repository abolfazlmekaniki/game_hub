import {FaWindows,FaAndroid,FaLinux,FaPlaystation,FaApple,FaXbox} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { platforms } from "../../hooks/useGames/useGames"
import { HStack, Icon, IconProps, Text } from "@chakra-ui/react"


interface props {
    platforms : platforms[]
}

const  PlatformIcon:React.FC<props> = ({platforms}):JSX.Element=>{
    
    const iconmap:{[key:string]:IconProps} = {
        pc:FaWindows,
        playstation : FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux : FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }

return(
    <HStack>
    {platforms.map((platform)=><Icon key={platform.id} as={iconmap[platform.slug]} color='gray.500' marginY={1.5}/>)}
    </HStack> 
)
  
}

export default PlatformIcon
