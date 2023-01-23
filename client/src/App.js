import React,{useState} from "react";
import Header from "./Components/Header";
import TodoFrom from "./Components/TodoFrom";
import Todos from "./Components/Todos";


import "./App.css"


function App() {
  
  const [add,setAdd]=useState(false)
  const isAdd=()=>{
    
    setAdd(true);
    
  }
  return (
    <div className="h-screen flex flex-col mt-20  items-center">
     <Header/>
     <TodoFrom isSubmit={isAdd}/>
      <Todos add={add}/>
    </div> 
    
  );
}

export default App;
