'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPadre: {
        allowNull:true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull:true
      },
      descripcion: {
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
    await queryInterface.dropTable('Categoria');
  }
};