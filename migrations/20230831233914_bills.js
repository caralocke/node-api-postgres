/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema
    .createTable('bills', (table) => {
      table.uuid('bill_id')
            .primary()
      table.string('bill_name', 50)
            .notNullable()
      table.string('bill_amount', 10)
            .notNullable()
      table.string('due_date', 50)
            .notNullable()
      table.string('date_start', 10)
            .notNullable()
      table.string('date_end', 10)
            .notNullable()
      table.string('hex_color', 10)
            .notNullable()
      table.string('title', 150)
            .notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable('bills') 
};
