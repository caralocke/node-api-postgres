const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/bills', db.getBills);
app.get('/bills/:id', db.getBillById);
app.post('/bills', db.createBill);
app.put('/bills/:id', db.updateBill);
app.delete('/bills/:id', db.deleteBill);

app.get('/events', db.getEvents);
app.get('/events/:id', db.getEventById);
app.post('/events', db.createEvent);
app.put('/events/:id', db.updateEvent);
app.delete('/events/:id', db.deleteEvent);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
