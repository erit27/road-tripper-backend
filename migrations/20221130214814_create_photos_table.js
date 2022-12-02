/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
    .uuid('post_id')
    .references('posts.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.string('title');
    table.string('location_name');
    table.decimal('latitude', 17, 14);
    table.decimal('longitude', 17, 14);
    table.string('filepath').notNullable;
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('photos');
};
