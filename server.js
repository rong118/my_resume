const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'terminal-full-animation.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Dev server running on port: ' + port);
});
