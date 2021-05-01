const express = require("express");
const bodyparser = require("body-parser");

const app =express();
app.use(bodyparser.urlencoded({ extended: true}));

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/UTS.html");
});

app.post("/bmicalcuator", function(req, res) {
    var height = Number (req.body.height);
    var weight = Number (req.body.weight);
    var hasil = (weight/(height/100*2));

    if (hasil < 17.0){
        res.send("<center><h1>BMI" + hasil + "<center><h1>+Kurus");
    }
    else if(hasil >= 17.0 && hasil < 24.0){
        res.send("<center><h1>BMI" + hasil + "<center><h1>+Ideal");
    }
    else if(hasil >= 24.0 && hasil < 27.0){
        res.send("<center><h1>BMI" + hasil + "<center><h1>+Gemuk");
    }
    else if(hasil > 27.0){
        res.send("<center><h1>BMI" + hasil + "<center><h1>+Obesitas");
    }
});

app.listen(3000, function (){
    console.log("port active at 3000")
});