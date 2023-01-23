import {React,useState} from "react"
import {
  useQuery,
  useMutation,
  useQueryClient,
  
  
} from '@tanstack/react-query';

const fetcher=async(...args)=>{
   const res=await fetch(...args);
   const data=await res.json();
   return data;
   
  
}


const TodoFrom=({isSubmit})=>{
  const query=useQueryClient()
  
  const [todo,setTodo]=useState();
 const [submit,setSubmit]=useState(false)
  const handleChange=(e)=>{
    
    setTodo(e.target.value);

  }
  const [input,setInput]=useState()
  
  const mutation=useMutation((param)=>fetcher("http://localhost:8080/todos",{       
        method:"POST",
        headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(param)}),{
        
        onSuccess(data){
            query.invalidateQueries("bloods")
            
          
        }
      })
      
  const handleSubmit=async(e)=>{
    e.preventDefault();
    let data={data:todo,done:true}
   console.log(mutation.isLoading)
    await mutation.mutate(data);
    setTodo("")
}
  return(
       
       <form onSubmit={handleSubmit} className="flex basis-8 md:w-1/2 w-full px-6">
          <input className="m-1 text-base  font-normal px-3 py-1.5  border-b-2 border-slate-800   md:w-full focus:ring-slate-600 focus:border-slate-800 block  text-gray-900  focus:outline-none transition ease-in-out" value={todo} placeholder="Enter new Toodo ..." onChange={handleChange} />
         <button className="mt-1  rounded-md bg-[#2c3e50] text-white  w-1/2 h-10 ">Add</button>
       </form>
       
    )

}
export default TodoFrom;