var Router = require('express').Router();
var BookModel = require('./schema_book');
// Route       - /book
// Des         - to get all books
// Acess       - PUBLIC
// Method      - GET
// Param       - none
// Body        - none=-
Router.get("/book", async (req,res) => {
    const getAllBooks = await BookModel.find();
     return res.json(getAllBooks);
});

// Route       - /book/:bookID
// Des         - get book on ISBN
// Acess       - PUBLIC
// Method      - GET
// Param       - bookID
// Body        - none
Router.get("/book/:bookID",async (req,res) => {
    const getBook = await BookModel.findOne({ISBN: req.params.bookID})
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
Router.get("/book/author/:author", async (req,res) => {
    const getBook = await BookModel.findOne({author: req.params.author});
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
  Router.post("/book/new", async (req,res) => {
    try{
      const {newBook} = req.body;
      await BookModel.create(newBook);
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
  Router.delete("/book/delete/:isbn",async(req,res) => {
    const {isbn} = req.params;
      
      const updateBookDatabase = await BookModel.findOneAndDelete(
          { ISBN: isbn}
      );
  
      return res.json(updateBookDatabase);
  })
module.exports = Router;