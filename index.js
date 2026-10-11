const express = require("express");
const app = express();
const path = require("path");
const {v4:uuidv4} = require("uuid");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000,()=>{
    console.log("Listening on port:3000");
})

let data = [
    {
        id:uuidv4(),
        username:"Govind",
        content:"I am practicing"
    },
    {
        id: uuidv4(),
        username:"ShradhaKhapra",
        content:"Hard Work!"
    },
    {
        id:uuidv4(),
        username:"RahulKumar",
        content:"I Got my first internship!"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{postData:data});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id=uuidv4();
    data.push({username,content,id});
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
   let {id} = req.params;
   let uPost = data.find((p)=> id === p.id);
   res.render("uPost.ejs",{postReq:uPost});
});