const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fitness extends Model { }

Fitness.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calories_burned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    met_level: {
      type: DataTypes.ENUM('1', '2', '3', '4'),  // ENUM values as strings
      allowNull: false,
      defaultValue: '4',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "fitness",
  }
);

module.exports = Fitness;
