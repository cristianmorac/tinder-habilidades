const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
  { timestamps: true }
);

module.exports = User;
