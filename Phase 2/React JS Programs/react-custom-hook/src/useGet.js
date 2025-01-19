import axios from "axios";
import { useEffect, useState } from "react";

function useGet(url){
let [data,setData] = useState([{}]);
let [error,setError] = useState(null);
let [loading,setLoading]=useState(true)
useEffect(()=> {
    let loadData = async()=> {
        // axios.get(url).then((response) => {
        // console.log(response.data);
        // setData(response.data);
        // }).catch((error) => {
        // console.log(error);
        // setError(error);
        // });
        // console.log("useEffect");

        try{
        let response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        setLoading(false);
         }catch(error){
         console.log(error);
             setError(error.message)
        }
        console.log("useEffect");
    }
    loadData();
},[url])

    return {data,loading,error};
}



export default useGet;