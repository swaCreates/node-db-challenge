
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {
          pj_id: 1,
          task_desc: 'use my notes, the internet, and my knowledge of relational dbs to complete this project',
          notes: 'take my time',
        },
        {
          pj_id: 1,
          task_desc: 'make sure my laptop is charged',
        },
        {
          pj_id: 2,
          task_desc: 'contact the nearest mechanic shop',
          notes: 'find the lowest price'
        },
        {
          pj_id: 2,
          task_desc: 'check ratings of the shop',
          notes: 'make sure the shop does a good job'
        },
      ]);
    });
};
