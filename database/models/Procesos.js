const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Procesos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idMateria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Materias',
        key: 'id'
      }
    },
    descipcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuarioRegistro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registroActivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Procesos',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Procesos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
