const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require('hbs');
// const partials = require('partials')

// public statica path
const staticPath = path.join(__dirname,"../public");
const template_Path = path.join(__dirname,"../templates/views");
const partials_Path = path.join(__dirname,"../templates/partials");

// console.log(staticPath)
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",template_Path);
hbs.registerPartials(partials_Path);

// routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
        erroeMsg:"Opps! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`listening ${port}`)
})