/** Database config for database. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
  // connectionString: DB_URI // Not compatible
  host: "/var/run/postgresql",
  database: DB_URI
});

db.connect();


module.exports = db;
