const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000,()=>{
    console.log("Listening on port:3000");
})

let data = [
    {
        username:"Govind",
        content:"I am practicing"
    },
    {
        username:"ShradhaKhapra",
        content:"Hard Work!"
    },
    {
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
    data.push({username,content});
    console.log(data);
    res.redirect("/posts")
})