/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('username').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('hashed_pw').notNullable();
    table.string('avatar');
    table.string('access').notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
