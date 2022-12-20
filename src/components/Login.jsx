import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate()

 
    const [user,setuser]=useState({
        username:"",
        password:""

    })
    function handlechange(e){
        const {name,value}=e.target;
        e.preventDefault()
        setuser({
            ...user,
            [name]:value
        })
       
    }
    function submit({setlogin}){
        const {username,password}=user;
        if(username && password){
        axios.post("http://localhost:8000/",user)
        .then((res)=>{alert(res.data.message)
        setlogin(res.data.user)
        })
        navigate("/welcome");
        
            
        }
       
    }
    return(
        <div className="form form-control">
            <h1>Login</h1>
            <form action="/"  />
            <div className="user">
            <label for="username">Username</label>
            <input type="text" className="form-control" name="username" value={user.username} onChange={handlechange} />
            </div>
            <div className="password">
            <label for="password" >Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={handlechange} />
            </div>
            <button type="submit" className="btn btn-lg btn-primary" onClick={submit}>Login</button>
        </div>
    );
}

export default Login;