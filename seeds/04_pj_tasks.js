
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Project_Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Task').insert([
        {
          pj_id: 1,
          res_id: 1,
          task_id: 1
        },
        {
          pj_id: 1,
          res_id: 2,
          task_id: 2
        },
        {
          pj_id: 2,
          res_id: 3,
          task_id: 3
        },
        {
          pj_id: 2,
          res_id: 4,
          task_id: 4
        },
      ]);
    });
};
