const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");

const seedDatabase = async () => {
  //NOTE: ({ force : true }) adds a DROP TABLE IF EXISTS
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

seedDatabase();
