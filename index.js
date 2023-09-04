const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const billRouter = require('./routes/bill');

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



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
