const express = require('express');
const path = require('path');
const hbs=require('hbs');
const app = express();
const port = process.env.PORT || 3000;


const staticPath = path.join(__dirname, "../public");
// const templatePath = path.join(__dirname, "../template/views")
// const partials_path = path.join(__dirname, "../template/partials")

//middleware
app.set('view engine','hbs');
// app.set('views',templatePath);
// hbs.registerPartials(partials_path);

app.use(express.static(staticPath));
//routings
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render('404error',{
        errorMsg:'OOPs!page not found'
    });
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})