'use strict';
const bcrypt= require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    name: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING,unique:true, validate: {len: {args: [6, 128],msg: "Email address must be between 6 and 128 characters in length"},isEmail: {msg: "Email address must be valid"}}},
    password: {type:DataTypes.STRING,allowNull: false},
    address: {type:DataTypes.STRING,allowNull: false},
    npi: {type:DataTypes.TEXT,unique:true,allowNull: false},
    dea: {type:DataTypes.STRING,unique:true},
    licenseNumber: {type:DataTypes.STRING,unique:true,allowNull: false},
    hin: {type:DataTypes.STRING,unique:true,allowNull: false},
    phone: {type:DataTypes.STRING,unique:true,allowNull: false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Provider.associate = function(models) {
    // associations can be defined here
  };
  return Provider;
};
