import React from "react";
import "./Overview.css";
import Session from  "../../components/sessions/sessions"
import pathway from './pathway.png'

function Overview(){
return(
 <div className="fpc">
    <div className ='pathway'  >
        <img src={pathway}/>
    </div>
    <div className= "sessions">  
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
    </div>
 </div>
)

}

export default Overview;




    
  