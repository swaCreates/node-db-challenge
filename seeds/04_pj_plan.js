
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Project_Plan').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Plan').insert([
        {
          pj_id: 1,
          res_id: 1,
        },
        {
          pj_id: 1,
          res_id: 2,
        },
        {
          pj_id: 2,
          res_id: 3,
        },
        {
          pj_id: 2,
          res_id: 4,
        },
        {
          pj_id: 2,
          res_id: 2,
        },
        {
          pj_id: 2,
          res_id: 1,
        },
      ]);
    });
};
