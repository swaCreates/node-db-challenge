// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: ''
  },
  useNullAsDefault: true,
  
  // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
};
