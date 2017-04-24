const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

// Configure express static middleware
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);    
});
