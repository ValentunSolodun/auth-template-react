const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

const Users = require("./routes/users");

const jwt = require('jsonwebtoken');
const config = require('./config');
const cookieParser = require('cookie-parser');

const cors = require('cors');
app.use(cookieParser())
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/users', Users);

app.use('/', (req, res, next) => {

  console.log('use token');
  let token = req.headers.token;

  jwt.verify(token, config.secret, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      req.user = data;
      next();
    }

  });
});

app.get('/custom', (req, res) => {
  res.send(200);
});

app.listen(port, () => console.log('server created on port - ' + port));