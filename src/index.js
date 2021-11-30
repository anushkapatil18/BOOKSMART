const express = require('express')
const app = express();

//const staticpath = path.join(__dirname,"../public");

//middleware
app.use(express.static('../public'));

app.listen(8080,() => {
    console.log("Listening the port 8080");
})