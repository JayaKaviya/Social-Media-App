import React, { createContext, useState, useContext } from 'react';




const ParallaxBG=({url,children="TRENDCRAZE"})=>{ 

    return( 
        <div className="container-fluid" 
        style={ 
            { 
                backgroundImage: "url( " + url + " )", 
                backgroundAttachment : "fixed", 
                padding : "100px 0px 75px 0px" ,//clockwise 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: "cover", 
                backgroundPosition:'center center', 
                display:"block",
            }
        }
        >  

        <h1 className="display-1 font-weight-bold text-center py-5">TRENDCRAZE</h1>  
            

            {children}
        </div>
    );
};

export default ParallaxBG;