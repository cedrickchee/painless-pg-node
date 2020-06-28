
exports.up = function(knex) {
    return knex.schema.table('ideas', table => {
        table.boolean('completed');
    });
};

exports.down = function(knex) {
    return knex.schema.table('ideas', table => {
        table.dropColumn('completed');
    });
};
