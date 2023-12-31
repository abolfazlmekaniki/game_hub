import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"
import usePlatforms from "../../hooks/usePlatforms/usePlatforms"
import { platforms } from "../../hooks/useData/useData"

interface props{
  onselectedplatforms:(platforms:platforms|null)=>void
}

const PlatformsSelector= ({onselectedplatforms}:props)=>{
    const {data,error} = usePlatforms();

    if(error) return null 

    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>Platforms</MenuButton>
        <MenuList>
        {data.map(platform=><MenuItem onClick={()=>onselectedplatforms(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>

      </Menu>
    )

}

export default PlatformsSelector