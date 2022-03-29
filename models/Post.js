const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create class Post that extends from Model
class Post extends Model {}

Post.init(
  // Define model attributes
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // content
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // date
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // user ID
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // Additional Model Options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
