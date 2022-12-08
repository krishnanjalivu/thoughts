import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./Login";
import {Route} from "react-router-dom";


function App(){
    const [user,setlogin]=useState({})
    return(
        <div className="smiley">
            <h1>Smiley</h1>
         
            <Route path="/"><Login setlogin={setlogin} /> </Route>
            <Route path="/welcome">{user && user._id}<Welcome /></Route> 
           
            
        </div>
    );
}
export default App;
