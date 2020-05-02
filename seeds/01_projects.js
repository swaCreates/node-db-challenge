
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        {
          pj_name: 'db-challenge',
          pj_description: 'complete the db sprint',
        },
        {
          pj_name: 'muffler delete',
          pj_description: 'have my mufflers removed',
        },
      ]);
    });
};
