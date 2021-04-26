import { useEffect, useState } from "react"
import { apikey, contextKey } from "./apikey"
import { Query_interface } from "./state"

export const useGoogle = (term :  Query_interface) : any=>{
         const  [data, setData] = useState(null)
         const  [dataError, setDataError] = useState(null)

   useEffect(():void=>{
           
    const Fetch = async ()=>{
       
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${contextKey}&q=${term}`
        )
        .then( res => res.json())
        .then(data =>{ setData(data)
            console.log(data,"data") 
        })
           
    }
    Fetch()
   },[])
   
   return {data}

}