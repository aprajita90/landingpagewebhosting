
const express = require('express');
const app = express();
const path = require('path');
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