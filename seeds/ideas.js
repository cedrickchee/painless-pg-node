
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {creator: 'John', idea: 'Buy milk'},
        {creator: 'Alice', idea: 'Sleep'},
        {creator: 'Jane', idea: 'Blog post'}
      ]);
    });
};
