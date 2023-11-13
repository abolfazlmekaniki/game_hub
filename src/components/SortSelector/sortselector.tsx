import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

interface props {
    onSelectsort :(sortOrder:string)=>void,
    selectedsort:string
}

const SortSelector:React.FC<props>=({onSelectsort,selectedsort})=>{

    const sortOrders = [
        {value:'',label:'Relevance'},
        {value:'-added',label:'Data added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Avrage rating'}
    ]
    const currentsortorder = sortOrders.find(order=>order.value==selectedsort);
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>Order by : {currentsortorder?.label}</MenuButton>
        <MenuList>
            {sortOrders.map(order=><MenuItem onClick={()=>onSelectsort(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>

      </Menu>
    )

}

export default SortSelector