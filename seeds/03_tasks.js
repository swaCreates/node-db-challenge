
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {
          task_description: 'use my notes, the internet, and my knowledge of relational dbs to complete this project',
          notes: 'take my time',
        },
        {
          task_description: 'make sure my laptop is charged',
        },
        {
          task_description: 'contact the nearest mechanic shop',
          notes: 'find the lowest price'
        },
        {
          task_description: 'check ratings of the shop',
          notes: 'make sure the shop does a good job'
        },
      ]);
    });
};
