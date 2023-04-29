const express=require("express")
const path = require('path');
const hbs=require('hbs')
const app=express()
const port= 8080
const static_path =path.join(__dirname,"../public") 
const partials_path = path.join(__dirname,"../partials")

app.set('view engine','hbs');
app.use(express.static(static_path))
hbs.registerPartials(partials_path) 

app.get("",(req,res)=>{
    res.render('index')
})
app.get("/index",(req,res)=>{
    res.render('index')
})


app.get("/aboutus",(req,res)=>{
    res.render('aboutus')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render("errorpage")
})


app.listen(port,()=>{
    console.log("listening")
})