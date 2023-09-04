const db = require('../config/db');

module.exports = billService = {
  getAll: async () => {
    const bills = await db("bills");
    return bills;
  },
  getById: async (id) => {
    const bill = await db("bills").where("bill_id", id);
    return bill;
  },
  create: async (bill) => {
    let { bill_id, bill_name, bill_amount, due_date } = bill;
    const bills = await db("bills").insert({
      bill_id,
      bill_amount,
      bill_name,
      due_date,
      date_start: due_date,
      date_end: due_date,
      title: `${bill_name}: $${bill_amount}`,
      hex_color: '00FFFF'
    });
    return bills;
  },
  update: async (id, bill) => {
    const bills = await db("bills").where("bill_id", id).update({
      bill_name: bill.bill_name,
      bill_amount: bill.bill_amount,
      due_date: bill.due_date,
      date_start: bill.due_date,
      date_end: bill.due_date
    });
    console.log('bills', bills)
    return bills;
  },
  delete: async (id) => {
    const bills = await db("bills").where("bill_id", id).del();
    return bills;
  },
};