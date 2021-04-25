const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Materias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    denominacionDemandante: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    denominacionDemandado: {
      type: DataTypes.STRING(255),
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
    tableName: 'Materias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Materias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
