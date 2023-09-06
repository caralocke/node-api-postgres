const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const billRouter = require('./routes/bill');
const port = 3000

app.use(cors({
  origin: "*"
}));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/bills', billRouter);



app.listen(port,'0.0.0.0', () => {
  console.log(`App running on port ${port}.`)
});
