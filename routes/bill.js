const express = require('express');
const router = express.Router();
const billController = require('../controller/billController');

router.route('/')
  .get(billController.getAll)
  .post(billController.create);
router
  .route('/:id')
  .get(billController.getById)
  .put(billController.update)
  .delete(billController.delete);

module.exports = router;