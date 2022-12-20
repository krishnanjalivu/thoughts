import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user,setlogin] = useState({});
  return (
    <div className="smiley">
      <h1>Smiley</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login setlogin={setlogin} />}></Route>
          <Route path="/welcome" element={<Welcome user={user.username}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
// function App(){
//     const [user,setlogin]=useState({})
//     return(
//         <div className="smiley">
//             <h1>Smiley</h1>
//             <Routes>
//             <Route path="/"><Login setlogin={setlogin} /> </Route>
//             <Route path="/welcome">{user && user._id}<Welcome /></Route> 
//             </Routes>
            
//         </div>
//     );
// }
// export default App;
