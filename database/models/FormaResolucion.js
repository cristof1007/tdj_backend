const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class FormaResolucion extends Model {}
FormaResolucion.init({
    idTipoResolucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        xlabel: 'ID'
    },
    descripcion: {
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
    modelName: "forma_resolucion",
    timestamps: false
});

module.exports = FormaResolucion;