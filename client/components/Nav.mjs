import Link from "next/link"; 
import React from 'react';



import { UserContext } from "../context/index.mjs"; 
import { useContext, useEffect, useState } from "react"; 
import { useRouter } from 'next/router';  
import { Avatar } from 'antd';  

         

const Nav = () => {  
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);   
  const router = useRouter();

  useEffect(() => { 
    setCurrent(window.location.pathname);
  }, []);

  const logout = () => { 
    window.localStorage.removeItem('auth'); 
    setState(null); 
    router.push("/login");
  } 

  return( 
    <nav className="nav nav-tabs bg-secondary bg-gradient d-flex justify-content-space-between" style={{backgroundColor: "darkblue"}}>
      
      
      <Link href="/" legacyBehavior>
        <a className={`nav-link logo ${current === "/" && 'active'}`}>
        
          TRENDCRAZE
        </a> 
      </Link> 

     
        {state !== null ? (
          <>   
            <Link href="/user/dashboard" legacyBehavior>
              <a className={`nav-link ${current === '/user/dashboard' && 'active'}`}>
                {state && state.user && state.user.name && state.user.name.toUpperCase()} DASHBOARD
                
              </a> 
            </Link> 

            <Link href="/user/profile/update" legacyBehavior>
              <a className={`nav-link ${current === '/user/profile/update' && 'active'}`}>
                PROFILE
              </a> 
            </Link>  

            {state.user.role==='Admin'&& ( 

              <Link href="/admin" legacyBehavior>
              <a className={`nav-link ${current === '/admin' && 'active'}`}>
               Admin
              </a> 
            </Link>

            ) }

            <a onClick={logout} className="nav-link">LOGOUT</a>
          </> 
        ) : ( 
          <> 
            <Link href="/login" legacyBehavior>
              <a className={`nav-link ${current === '/login' && 'active'}`}>LOGIN</a> 
            </Link>

            <Link href="/register" legacyBehavior>
              <a className={`nav-link ${current === '/register' && 'active'}`}>REGISTER</a>
            </Link> 
          </>
        )}
     
    </nav>
  );
};

export default Nav;
