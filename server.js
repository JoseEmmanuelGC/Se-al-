const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8080;

function sendPage(req, res, next) {
  console.log('Sending page');
  res.sendFile('views/page.html', {root: __dirname });
}

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.options('*', cors());
app.use(cors());
app.get('/', sendPage);
app.post('/', (req, res, next) => {
    console.log(req.body.serial);
    res.json({error: false, data:'hi'});
    res.status(200).send();
  });

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

app.listen(port, function () {
  console.log('RESTful API server started on: ' + port);
});