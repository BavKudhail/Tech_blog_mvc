const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    //   database name
    "techblog_db",
    // process.env.DB_NAME,
    // user username
    // process.env.DB_USER,
    "root",
    // user password
    // process.env.DB_PASSWORD,
    "",
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
