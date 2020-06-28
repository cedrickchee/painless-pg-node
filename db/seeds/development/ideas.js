
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {creator: 'John', idea: 'Buy milk', completed: false},
        {creator: 'Alice', idea: 'Sleep', completed: false},
        {creator: 'Jane', idea: 'Blog post', completed: false},
        {creator: 'Chen', idea: 'Cook dinner', completed: true},
      ]);
    });
};
