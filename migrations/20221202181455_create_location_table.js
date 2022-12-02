/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('location', (table) => {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.float('latitude', 17, 14).notNullable;
    table.float('longitude', 17,14).notNullable;
    table.decimal('private_lat', 17, 14);
    table.decimal('private_long', 17, 14);
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('location');
};
