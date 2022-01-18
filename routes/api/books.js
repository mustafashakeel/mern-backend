const express = require('express');
const router = express.Router();
const Books = require('../../models/Book');


// Create Routes GET  for View 

// router.get('/test', (req, res) => {
//     res.send("<h1>This is a test </h1>");
// });


router.get('/test', (req, res) => res.send('book route testing!'));
module.exports = router;