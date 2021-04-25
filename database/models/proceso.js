'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proceso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Proceso.init({
    idMateria: DataTypes.INTEGER,
    descipcion: DataTypes.STRING,
    usuarioRegistro: DataTypes.STRING,
    registroActivo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Proceso',
  });
  return Proceso;
};