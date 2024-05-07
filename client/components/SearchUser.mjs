import { useState,useContext } from "react";
import { UserContext } from "../context/index.mjs"; 
import axios from 'axios'; 
import People from "./cards/People.mjs"; 
import {toast} from 'react-toastify';

const SearchUser=()=>{  

     const [state,setState]=useContext(UserContext);
    
     const [query,setQuery]=useState("");  

     const [result,setResult]=useState([]);

     const searchUser=async(e)=>{ 
        e.preventDefault(); 
        
      try{ 

         const {data}=await axios.get(`/search-user/${query}`); 
        
         setResult(data);
      }catch(err){ 
          console.log(err);
      }

     }
  

     const handleFollow =async(user)=>{ 
      
      try{ 
         const {data}=await axios.put('/user-follow',{_id:user._id}); 
        
            let auth=JSON.parse(localStorage.getItem("auth")); 
            auth.user=data; 
            localStorage.setItem("auth",JSON.stringify(auth));

          //update context 
            setState({...state,user:data})
          
          //update people state                
            let filtered=result.filter((p)=> p._id !== user._id); 
            setResult(filtered); 

           toast.success(`Following ${user.name}`);
      }catch(err){ 
         console.log(err);
      }
    } 

    const handleUnfollow=async(user)=>{ 
       
      try{ 
           const {data}=await axios.put('/user-unfollow',{_id :user._id}); 

             
             let auth=JSON.parse(localStorage.getItem("auth")); 
             auth.user=data; 
             localStorage.setItem("auth",JSON.stringify(auth));

           
             setState({...state,user:data})
           
          
             let filtered=result.filter((p)=> p._id !== user._id); 
             setResult(filtered); 

             toast.error(`Unfolllowed ${user.name}`); 

      }catch(err){ 
          console.log(err);
      }
  } 


    return( 
      <> 
        <form className="form-inline row pt-2" onSubmit={searchUser}> 
             <div className="col-8"> 
             <input 
             onChange={(e)=> {
               setQuery(e.target.value); 
               setResult([]);

             }} value={query} 
            className="form-control"  
            type="search"
            placeholder="Search"
           />  
             </div>

              <div className="col-4"> 
              <button className="btn btn-outline-primary col-12"> 
                 Search
              </button> 
              </div>

      </form>  
      
      {result && result.map((r)=>(
      <People 
       key={r._id} people={result} 
         handleFollow={handleFollow}  handleUnfollow={handleUnfollow}/>))}
      </>
    );
} 

export default SearchUser;