require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');

const Book = require('./schema_book');

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
).then(() => console.log("connection established!")).catch((err) => {console.log(err);})
const App = express();
App.use(express.json());
App.get("/",(req,res) => {
  res.json({message: "Server is up!!"});
})
// Route       - /book
// Des         - to get all books
// Acess       - PUBLIC
// Method      - GET
// Param       - none
// Body        - none=-
App.get("/book", async (req,res) => {
  const getAllBooks = await Book.find();
   return res.json(getAllBooks);
});

// Route       - /book/:bookID
// Des         - get book on ISBN
// Acess       - PUBLIC
// Method      - GET
// Param       - bookID
// Body        - none
App.get("/book/:bookID",async (req,res) => {
  const getBook = await Book.findOne({ISBN: req.params.bookID})
  if(!getBook){
    return res.json({error: `No Book found of isbn no ${req.params.bookID}`});
  }
  return res.json(getBook);
});

// Route       - /bookAuthor/:author
// Des         - get book on author
// Acess       - PUBLIC
// Method      - GET
// Param       - author name
// Body        - none
App.get("/book/author/:author", async (req,res) => {
  const getBook = await Book.findOne({author: req.params.author});
  if(!getBook){
    return res.json({error: `No Book found of author ${req.params.author}`});
  }
  return res.json(getBook);
});

// Route       - /book/new
// Des         - add new book
// Acess       - PUBLIC
// Method      - POST
// Param       - none
// Body        - none
App.post("/book/new", async (req,res) => {
  try{
    const {newBook} = req.body;
    await Book.create(newBook);
    return res.json({message: 'Book added to the database'});
  }catch(error){
    return res.json({error: error.message});
  }
});

// Route       - /book/delete/:isbn
// Des         - delete a book based on isbn
// Acess       - PUBLIC
// Method      - DELETE
// Param       - isbn
// Body        - none
App.delete("/book/delete/:isbn",async(req,res) => {
  const {isbn} = req.params;
    
    const updateBookDatabase = await Book.findOneAndDelete(
        { ISBN: isbn}
    );

    return res.json(updateBookDatabase);
})

App.listen(8080,()=> console.log("Server is up!!"));


/*var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Server is working!!"); 
  res.end();
}).listen(8080);*/