import {useState} from "react"
export default function useAuth() {
	  const [auth,setAuth]=useState(false);
	  
	  return auth;
	  
}
