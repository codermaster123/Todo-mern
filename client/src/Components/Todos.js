import {React,useState,useEffect }from "react";
import {useQuery} from "@tanstack/react-query";


const fetcher=async(...args)=>{
   const res=await fetch(...args);
   const data=await res.json();
   return data;
}


 export default function Todos({add}) {
       const {data:todos,isLoading}=useQuery(["todos"],()=>fetcher("http://localhost:8080/todos"))
       
     
      if(isLoading) return <h1>Loading.....</h1>
     return(
      <>
        <div>
       { todos && todos.map((todo,index)=>{
         
           return (
           <div key={index} >
           <h1>{todo.data}</h1>
           </div>
           
           )
       })}
       </div>
       
      
     </>
      )
 }
