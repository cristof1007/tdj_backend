'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Materia.init({
    descripcion: DataTypes.STRING,
    denominacionDemandante: DataTypes.STRING,
    denominacionDemandado: DataTypes.STRING,
    usuarioRegistro: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    registroActivo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false,
    createdAt: false,
  });
  return Materia;
};