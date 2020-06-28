
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {creator: 'David', idea: 'Insta-everything'},
        {creator: 'Tan', idea: 'Sleep'},
        {creator: 'Wayne', idea: 'Start a new blog post'},
        {creator: 'Serene', idea: 'Cook dinner for neighbours'}
      ]);
    });
};
