'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsTo(models.Users, {
        foreignKey: "id"
      })
    }
  }
  Events.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    location: DataTypes.FLOAT,
    status: DataTypes.ENUM({ values: ["Draft", "Active", "Passed"] }),
    userId: {
      type: DataTypes.NUMBER,
    }
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};