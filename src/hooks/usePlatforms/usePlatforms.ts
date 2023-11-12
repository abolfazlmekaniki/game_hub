import useData from "../useData/useData";

export interface platroms{
    id:number;
    name:string;
    slug:string;
}



const usePlatforms = ()=> useData<platroms>('./platforms/lists/parents');


export default usePlatforms