'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      denominacionDemandante: {
        allowNull:true,
        type: Sequelize.STRING
      },
      denominacionDemandado: {
        allowNull:true,
        type: Sequelize.STRING
      },
      usuarioRegistro: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fechaRegistro: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()")
      },
      registroActivo: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: Sequelize.literal(true)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Materia');
  }
};