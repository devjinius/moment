const express = require('express');
const app = express();

const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(8000);
