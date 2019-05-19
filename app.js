const express = require('express');
const app = express();
const http = require('http');

// const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

// const port = parseInt(process.env.PORT, 10) || 8080;
// const port = 8000;
// app.set('port', port);
// const sequelize = require('./models').sequelize;
// sequelize.sync({ force: true });
// sequelize.sync();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// const server = http.createServer(app);
// server.listen(port);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(3000);
