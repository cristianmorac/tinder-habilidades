const { DataTypes } = require("sequelize");
const sequelize  = require("../database/config");
const Company = require('../models/company')
const User = require('../models/user')

const Service = sequelize.define(
    "service", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
        titulo_trabajo: {
          type: DataTypes.STRING,
        },
        description:{
           type: DataTypes.STRING 
        },
        tiempo_laborar: {
            type: DataTypes.STRING
        },
        estado: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
    },
    { timestamps: true }
  );
  
  // uno a muchos
  Company.hasMany(Service);
  Service.belongsTo(Company);

  // uno a muchos
  User.hasMany(Service);
  Service.belongsTo(User);


  
  module.exports = Service