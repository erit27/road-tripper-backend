/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('username').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('hashed_pw').notNullable();
    table.string('access').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
