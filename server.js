const express = require('express');
const app = express();
const path = require('path');

app.set('/views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {});
});

var port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('Your node js server is running on port: ' + port);
});
