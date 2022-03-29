const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create class Post that extends from Model
class Comment extends Model {}

Comment.init(
  // Define model attributes
  {
    //   id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // comment
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date created
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
    // post ID
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
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
    modelName: "comment",
  }
);

module.exports = Comment;
