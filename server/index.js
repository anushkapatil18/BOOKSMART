require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');


const Book = require('./book');

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
).then(() => console.log("connection established!")).catch((err) => {console.log(err);})


const App = express();
App.use(express.json());
App.use('/',Book);

App.get("/",(req,res) => {
  res.json({message: "Server is up!!"});
})
App.listen(8080,()=> console.log("Server is up!!"));

/*var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Server is working!!"); 
  res.end();
}).listen(8080);*/