const express = require("express");
const fruits = require("./models/fruits.js");
const vegetables = require("./models/vegetables.js");

const app = express();
const port = 3000;

// SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/view`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// LISTENER
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}.`);
});

// FRUIT ROUTES
app.get("/fruits", (req, res) => {   
    res.render("fruits/Index", {
        fruits: fruits
    });
});

app.get("/fruits/:index", (req, res) => {    
    res.render("fruits/Show", { // SECOND PARAM MUST BE AN OBJECT
        fruit: fruits[req.params.index]
    });
});

// VEGETABLE ROUTES
app.get("/vegetables", (req, res) => {
    res.render("vegetables/Index", { // THIS REGARDS YOUR COMPONENTS FOLDER AND FILE.
        vegetables: vegetables
    });
});

app.get("/vegetables/:index", (req, res) => {
    res.render("vegetables/Show", {
        vegetable: vegetables[req.params.index]
    });
});