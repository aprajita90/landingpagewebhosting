

//alert("hi user");

// console.log("Building webpack");

// fetch("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true")
// .then((response) => {    
// console.log("API: ", response.json());
// })
// .catch();
const app1 = require('../public/styles/app.scss');
const express = require('express');
const app = express();
const path = require('path');
//const http = require('http');
//const req = Object.create(http.IncomingMessage.prototype)
//const less = require('express-less');
//const RedisStore = require('connect-redis')(express);
//const {ipcRenderer} = require('electron')
const port = process.env.PORT||8081;

//dist static path
const static_path = path.join(__dirname, "../public");

//console.log(path.join(__dirname));
app.use(express.static(static_path));

//routing
app.get("", (req, res)=>{
    res.render("index");
})
app.get("*", (req, res)=>{
    res.render("404 error page oops")
})
app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})