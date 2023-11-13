import bullsEye from '../../assets/Emojis/bulls-eye.webp'
import thumsup from '../../assets/Emojis/thumbs-up.webp'
import meh from '../../assets/Emojis/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react';
interface props {
    rating : number;
}

function Emoji({rating}:props) {
    
    const ratingmap:{[key:number]:ImageProps} ={
        3:{src:meh,alt:'meh',boxSize:'25px'},
        4:{src:thumsup,alt:'thums up',boxSize:'25px'},
        5:{src:bullsEye,alt:'bulls eye',boxSize:'35px'}
    }

return(
   <Image {...ratingmap[rating]} marginTop={1} />
)
  
}

export default Emoji
