const { response, request } = require("express");

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'Damon^2003',
  port: 5432,
});

const getBills = (request, response) => {
  pool.query('SELECT * FROM bills ORDER BY id ASC',
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getBillById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM bills WHERE id = $1',
  [id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createBill = (request, response) => {
  const { bill_name, bill_amount, due_date, event_id } = request.body
  pool.query('INSERT INTO bills (bill_name, bill_amount, due_date, event_id) VALUES ($1, $2, $3) RETURNING *',
  [bill_name, bill_amount, due_date, event_id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Bill added with ID: ${results.rows[0].id}`)
  })
};

const updateBill = (request, response) => {
  const id = parseInt(request.params.id)
  const { bill_name, bill_amount, due_date } = request.body
  pool.query('UPDATE bills SET bill_name = $1, bill_amount = $2, due_date = $3 WHERE id = $4',
    [bill_name, bill_amount, due_date, id],
    (error, results) => {
      if (error)  {
        throw error
      }
      response.stat(200).send(`Bill modified with ID: ${id}`)
    }
  )
};

const deleteBill = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM bills WHERE id = $1',
  [id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Bill deleted with ID: ${id}`)
  })
};

//////////////////////////////////////EVENTS/////////////////////////////////////////////

const getEvents = (request, response) => {
  pool.query('SELECT * FROM events ORDER BY id ASC',
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getEventById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM events WHERE id = $1',
  [id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createEvent = (request, response) => {
  const { title, bill_amount, due_date_start, due_date_end } = request.body
  pool.query('INSERT INTO events (title, bill_amount, due_date_start, due_date_end) VALUES ($1, $2, $3, $4) RETURNING *',
  [title, bill_amount, due_date_start, due_date_end],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Event added with ID: ${results.rows[0].id}`)
  })
};

const updateEvent = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, bill_amount, due_date_start, due_date_end } = request.body
  pool.query('UPDATE events SET title = $1, bill_amount = $2, due_date_start = $3, due_date_end = $4, WHERE id = $5',
    [title, bill_amount, due_date_start, due_date_end, id],
    (error, results) => {
      if (error)  {
        throw error
      }
      response.stat(200).send(`Event modified with ID: ${id}`)
    }
  )
};

const deleteEvent = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM events WHERE id = $1',
  [id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Event deleted with ID: ${id}`)
  })
};


module.exports = {
  getBills,
  getBillById,
  createBill,
  updateBill,
  deleteBill,
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
};