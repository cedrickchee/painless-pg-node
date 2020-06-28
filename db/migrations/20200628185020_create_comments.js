
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.text('comment').notNullable();
    table.string('creator');
    table.integer('ideas_id').references('ideas.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
