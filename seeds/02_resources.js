
exports.seed = function(knex) {
  // Truncates ALL existing entries
  return knex('Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {
          name: 'macBook pro',
        },
        {
          name: 'google internet',
        },
        {
          name: 'mechanic',
        },
        {
          name: 'car shop',
        },
      ]);
    });
};
