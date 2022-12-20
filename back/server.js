const express=require("express");
const bodyparser=require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userdatadb",{useNewUrlParser:true});
 

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const userschema=new mongoose.Schema({
    username:String,
    password:String
});
const User=mongoose.model("User",userschema);
app.get("/",function(req,res){
    res.send("helo")
})

app.post("/",function(req,res){
    const {username,password}=req.body;

    User.findOne({username:username},function(user,err){
        if(user){
            if(password===user.password){
                res.send({message:"Succesfully logged in",user:user});
                
            }
            else{
                res.send({message:"wrong password"});
            }
        }
        else if(err){
            res.send(err)
        }
        else{
            const user1=new User({
              username,password
            });
            user1.save(function(err){
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message:" you are registered"})
                }
            })
        }
    })

})
app.post("/welcome",function(req,res){
    const {username,password}=req.body;
    if(username && password){
        res.send({message:"welcome "+username})
    }
   
   
})



app.listen(8000,function(){
 console.log("the server is running");
});
