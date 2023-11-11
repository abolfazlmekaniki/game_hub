import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'1bab40259c3c404abaeaed6a18319164' 
    }
})