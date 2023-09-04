const billService = require('../services/billService');
module.exports = billController = {
  getAll: async (req, res, next) => {
    try {
      const bills = await billService.getAll();
      res.json(bills);
    } catch (error) {
      next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const bill = await billService.getById(req.params.id);
      res.json(bill);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const bill = await billService.create(req.body);
      res.json(bill);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const bill = await billService.update(req.params.id, req.body);
      res.json(bill);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const bill = await billService.delete(req.params.id);
      res.json(bill);
    } catch (error) {
      next(error);
    }
  },
};