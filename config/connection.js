const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;
// @NOTE: We are using JAWSDB to make our local SQL database available in the cloud

// If we are connecting to production database, then
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // else
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
