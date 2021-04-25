const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fallos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTipoFallo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorias',
        key: 'id'
      }
    },
    idProceso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Procesos',
        key: 'id'
      }
    },
    idTitulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorias',
        key: 'id'
      }
    },
    idFormaResolucion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categorias',
        key: 'id'
      }
    },
    numeroFallo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    idFuncionarioRelator: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contenidoHtml: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contenido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    demandante: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    demandado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    usuarioRegistro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    registroActivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'Fallos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Fallos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
