const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT ||  8000;


//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../Templates/views");//E:\MERN\Web_Development Project in ExpressJS\Templates\views
const partial_path = path.join(__dirname,"../Templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));

//routing
app.get("",(req,res) =>{
    res.render('index');
});
app.get("/about",(req,res) =>{
    res.render('about');
});
app.get("/weather",(req,res) =>{
    res.render('weather');
});
app.get("*",(req,res) =>{
    res.render('404_error',{
        errorMsg : '404 - Oops Page Not Found !!'
    })
});
app.listen(port,()=>{
    console.log(`listening from the port ${port}`);
});


// this is imp to run hbs partials in express
// node src/app.js -e js,hbs