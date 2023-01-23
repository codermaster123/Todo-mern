import express,{Router} from "express";

import  {addTodo, getAllTodos}  from '../Contoller/todo-contorller.js';

const route = express.Router();

route.post("/todos",addTodo);
route.get("/todos",getAllTodos)
route.get("/",(req,res)=>{
  
});
export default route;