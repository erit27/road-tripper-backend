/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('hero_photo_url').notNullable().defaultTo('https://cdn.britannica.com/58/154258-050-1D37F2E7/Toco-toucan.jpg');
    table.mediumtext('content').notNullable();
    table.mediumtext('private_content').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
