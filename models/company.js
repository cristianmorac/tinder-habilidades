const { DataTypes } = require("sequelize");
const sequelize  = require("../database/config");

const Company = sequelize.define(
    "company", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
        name_company: {
          type: DataTypes.STRING,
        },
        nit:{
           type: DataTypes.STRING 
        },
        password: {
          type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        estado: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
    },
    { timestamps: true }
  
  );
  
  
  module.exports = Company