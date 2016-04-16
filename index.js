var express = require('express');
var db = require('./models');
var app = express();

app.use('/search', require('./controllers/searchCtrl'));
app.use('/tv', require('./controllers/tvCtrl'));



app.listen(process.env.PORT || 3000);
