
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {creator: 'David', idea: 'Insta-everything', completed: false},
        {creator: 'Tan', idea: 'Sleep', completed: false},
        {creator: 'Wayne', idea: 'Start a new blog post', completed: false},
        {creator: 'Serene', idea: 'Cook dinner for neighbours', completed: true}
      ]);
    });
};
