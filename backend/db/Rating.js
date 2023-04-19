const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");
const sequelize = require("./Connection");

const Rating = sequelize.define(
  "ratings",
  {
    ratingId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [["job", "applicant"]],
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: -1,
      validate: {
        min: -1,
        max: 5,
      },
    },
  },
  {
    tableName: "ratings",
  }
);

module.exports = {Rating};
