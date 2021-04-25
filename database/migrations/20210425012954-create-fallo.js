'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fallos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTipoFallo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categorias',
          key: 'id'
        }
      },
      idProceso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Procesos',
          key: 'id'
        }
      },
      idTitulo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categorias',
          key: 'id'
        }
      },
      idFormaResolucion: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Categorias',
          key: 'id'
        }
      },
      numeroFallo: {
        type: Sequelize.STRING
      },
      idFuncionarioRelator: {
        allowNull:true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      contenidoHtml: {
        type: Sequelize.STRING
      },
      contenido: {
        type: Sequelize.STRING
      },
      demandante: {
        type: Sequelize.STRING
      },
      demandado: {
        type: Sequelize.STRING
      },
      visible: {
        allowNull:true,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Fallos');
  }
};