import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface props{
    onsubmit:(searchtext:string)=>void
}

const  SearchInput:React.FC<props>=({onsubmit}):JSX.Element=>{

    const ref = useRef<HTMLInputElement>(null);

return(
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onsubmit(ref.current.value);
    }}>

        <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input ref={ref} borderRadius={20} placeholder="Search game..." variant='filled'/>
        </InputGroup>

    </form>
 )
  
}

export default SearchInput
