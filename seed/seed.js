// Import the sequelize connection
const sequelize = require("../config/connection");
// requirer User and Post objects from our models file
const { User, Post } = require("../models");

// Get our seed data
const userData = require("./userData.json");
const postData = require("./postData.json");

// Seed out database with data
const seedDatabase = async () => {
  //@NOTE: ({ force : true }) adds a DROP TABLE IF EXISTS
  await sequelize.sync({ force: true });

  //   seed user data
  const seedUser = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //   seed post data
  const seedPost = await Post.bulkCreate(postData);

  process.exit(0);
};

// Execute seed function
seedDatabase();
