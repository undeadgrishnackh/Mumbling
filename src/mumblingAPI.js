var express = require('express');
const { mumbling } = require('../src/mumbling');
var bodyParser = require('body-parser');
const PORT = 8888;
const HOST = '0.0.0.0';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/api/CodeWars/mumbling/1.0.0', (req, res) => {
  mumblingAPI(req, res);
});
app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://${HOST}:${PORT}`);
});

var mumblingAPI = (req, res) => {
  let result = mumbling(req.body.word);
  res.status(200).send({
    mumble: result
  });
};

module.exports = app;