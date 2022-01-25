const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');


// Create Routes GET  for View 

// router.get('/test', (req, res) => {
//     res.send("<h1>This is a test </h1>");
// });


router.get('/test', (req, res) => res.send('book route testing!'));



//1.  Get all the Books 
// Get all the Books List 
//  Get api/books
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// 2. Get  a Book by
// get a specific book 
//  api/books/:id
router.get('/:id', (req, res) => {

});

// Create a Book  
// create or save a book 
// post method api/books 

router.post('/', (req, res) => {

});

// Updte a Book
// Put Method for update 
// put api/books/:id

router.put('/', (req, res) => {

});

//  Delete a Book 
// Delete a book 
// Delete a book api/books/:id

router.delete('/', (req, res) => {

});



module.exports = router;