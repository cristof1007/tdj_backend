const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Materia extends Model {}
Materia.init({
    idMateria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        xlabel: 'ID'
    }, 
    descripcion: {
        type: DataTypes.STRING
    }, 
    denominacionDemandante: {
        type: DataTypes.STRING
    }, 
    denominacionDemandado:{
        type: DataTypes.STRING
    }, 
    usuarioRegistro: {
        type: DataTypes.STRING
    },
    fechaRegistro: {
        type: DataTypes.DATE
    },
    registroActivo: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: "materia",
    timestamps: false
});

module.exports = Materia;