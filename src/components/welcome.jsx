import axios from "axios";
import React from "react";
function Welcome(){
    axios.post("http://localhost:8000/welcome")
    .then((res)=>{alert(res.data.message)})
    return(
        <h1>"welcome "</h1>
    );
}
export default Welcome;