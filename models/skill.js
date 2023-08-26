const { DataTypes } = require("sequelize");
const User = require('../models/user')
const sequelize  = require("../database/config");

const Skills = sequelize.define(
    "skill",
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
    },
    { timestamps: false }
  );
  
  User.belongsToMany(Skills, { through: "User_Skill" });
  Skills.belongsToMany(User, { through: "User_Skill" });

  module.exports = Skills