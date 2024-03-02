'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExhaustiveRecursion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExhaustiveRecursion.init({
    no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approachVideo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    walkthroughVideo: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'ExhaustiveRecursion',
  });
  return ExhaustiveRecursion;
};