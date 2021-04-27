//const { sequelize } = require("../db");
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Fallo = sequelize.define('fallo', {
        idFallo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            xlabel: 'ID'
        },
        idOficina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            xlabel: 'Oficina'
        },
        // idTipoFallo: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     xlabel: 'Tipo de Fallo'
        // },
        idProceso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            xlabel: 'Proceso'
        },
        idTitulo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            xlabel: 'Título'
        },
        idFormaResolucion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            xlabel: 'Forma de Resolución'
        },
        numeroFallo: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Número'
        },
        fechaFallo: {
            type: DataTypes.DATE,
            allowNull: false,
            xlabel: 'Fecha'
        },
        idFuncionarioRelator: {
            type: DataTypes.INTEGER,
            allowNull: false,
            xlabel: 'Relator'  
        },
        codigoFallo: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Código'
        },
        contenidoHTML: {
            type: DataTypes.TEXT,
            allowNull: false
            // validate: {
            //     len: [1, max]
            // }
        },
        contenidoTextoPlano: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        demandante: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Demandante:'
        },
        demandado: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Demandado:'
        },
        visible: {
            type: DataTypes.BOOLEAN
        },
        registroActivo: {
            type: DataTypes.BOOLEAN
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Usuario de Registro'
        },
        fechaRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
            xlabel: 'Fecha de Registro'
        }
    }, {
        createdAt: '_fecha_creacion',
        updatedAt: '_fecha_modificacion',
        freezeTableName: true,
        classMethods: {
          
        }
    });

    Fallo.associate = (models) => {
        Fallo.hasOne(models.TipoFallo, {as: 'idTipoFallo', foreignKey: 'idFallo'})
    };
    return Fallo;
}

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../db');

// class Fallo extends Model {}
// Fallo.init({
//     idFallo: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true,
//         xlabel: 'ID'
//     },
//     idOficina: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         xlabel: 'Oficina'
//     },
//     idTipoFallo: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'TipoFallo',
//             key: 'idTipoFallo'
//         },
//         xlabel: 'Tipo de Fallo'
//     },
//     idProceso: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         xlabel: 'Proceso'
//     },
//     idTitulo: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         xlabel: 'Título'
//     },
//     idFormaResolucion: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         xlabel: 'Forma de Resolución'
//     },
//     numeroFallo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Número'
//     },
//     fechaFallo: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         xlabel: 'Fecha'
//     },
//     idFuncionarioRelator: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         xlabel: 'Relator'  
//     },
//     codigoFallo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Código'
//     },
//     contenidoHTML: {
//         type: DataTypes.TEXT,
//         allowNull: false
//         // validate: {
//         //     len: [1, max]
//         // }
//     },
//     contenidoTextoPlano: {
//         type: DataTypes.TEXT,
//         allowNull: false

//     },
//     demandante: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Demandante:'
//     },
//     demandado: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Demandado:'
//     },
//     visible: {
//         type: DataTypes.BOOLEAN
//     },
//     registroActivo: {
//         type: DataTypes.BOOLEAN
//     },
//     usuarioRegistro: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Usuario de Registro'
//     },
//     fechaRegistro: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         xlabel: 'Fecha de Registro'
//     }
// }, {
//     sequelize,
//     modelName: "fallo",
//     timestamps: false
// });

// module.exports = Fallo;