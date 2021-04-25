'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fallo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fallo.init({
    idTipoFallo: DataTypes.INTEGER,
    idProceso: DataTypes.INTEGER,
    idTitulo: DataTypes.INTEGER,
    idFormaResolucion: DataTypes.INTEGER,
    numeroFallo: DataTypes.STRING,
    idFuncionarioRelator: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    contenidoHtml: DataTypes.STRING,
    contenido: DataTypes.STRING,
    demandante: DataTypes.STRING,
    demandado: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    usuarioRegistro: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    registroActivo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Fallo',
    timestamps: false,
    createdAt: false,
  });
  return Fallo;
};