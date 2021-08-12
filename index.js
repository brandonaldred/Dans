const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.listen(3000, () => {
    app.get('/', (req, res) => {
        res.render('index');
    })
});