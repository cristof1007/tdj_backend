'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categoria.init({
    idPadre: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    usuarioRegistro: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    registroActivo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Categoria',
    timestamps: false,
    createdAt: false,
  });
  return Categoria;
};