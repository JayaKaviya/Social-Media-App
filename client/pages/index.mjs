import {useContext,useEffect, useState} from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG.mjs";
import axios from "axios"; 
import PostPublic from "../components/cards/PostPublic.mjs"  

import Head from "next/head"; 
import Link from "next/link"; 

import io from "socket.io-client"


 
const socket=io(process.env.NEXT_PUBLIC_SOCKETIO,{ 
   reconnection : true, //to reconnect automaticaly
}) 

const Home=({posts})=>{ 
    const [state,setState]=useContext(UserContext);  

    const [newsFeed,setNewsFeed]=useState([]);
    


       useEffect(()=>{ 
     

      socket.on('new-post',(newPost)=> {  

             setNewsFeed([newPost,...posts]);
      });
    },[])

    const head=()=>(
        <Head> 
        <title>TRENDCRAZE - A social network by Jaya Kaviya</title> 
        <meta 
              name="description"  
              content="A social network by Developer JayaKaviya" 
        />  

        <meta  
        property="og:description" 
        content="A social network by Developer JayaKaviya" 
        /> 

        <meta property="og:type" content="website" /> 
        <meta property="og:site_name" content="TRENDCRAZE" />  
        <meta property="og:url" content="http://trendcraze.com" /> 
        <meta 
           property="og:image:secure_url" 
           content="http://trendcraze.com/images/default.jpg"  
        /> 

      </Head>

    ); 
  

    const  collection=newsFeed.length > 0 ? newsFeed : posts ;



    return( 
     <>   
       
       {head()}
     
     <ParallaxBG url="/images/default.jpg" />   


    



  <div className="container">  
    
  


    <div className="row pt-5 pb-5">  

    {collection.map((post)=>(  
      <div key={post._id} className="col-md-4" >
        <Link  href={`/post/view/${post._id}`} passHref legacyBehavior>
           <a style={{ textDecoration: 'none'}}> 
           <PostPublic key={post._id} post={post}  /> 
           </a>
        </Link> 
        </div>
     ))} 

    </div>
    </div>


     </>
    );
}; 
 

export async  function getServerSideProps(){  
    const backendUrl = 'http://localhost:8000';
    const {data}=await axios.get(`${backendUrl}/api/posts`); 
    // console.log(data); 
    return{ 
       props: { 
        posts: data,
       },
    };
}
export default Home;