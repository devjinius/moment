'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        'Todos',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false
          },
          content: {
            type: Sequelize.STRING,
            allowNull: true
          },
          checked: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
          },
          priority: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
          deadline: {
            type: Sequelize.DATE,
            allowNull: true
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          }
        },
        {
          charset: 'utf8'
        }
      )
      .then(() =>
        queryInterface.createTable(
          'Priorities',
          {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              allowNull: false,
              autoIncrement: true
            },
            label: {
              type: Sequelize.STRING,
              allowNull: false
            },
            color: {
              type: Sequelize.STRING,
              allowNull: false
            },
            createdAt: {
              type: Sequelize.DATE
            },
            updatedAt: {
              type: Sequelize.DATE
            }
          },
          {
            charset: 'utf8'
          }
        )
      )
      .then(() =>
        queryInterface.addConstraint('Todos', ['priority'], {
          type: 'foreign key',
          references: {
            table: 'Priorities',
            field: 'id'
          },
          onDelete: 'set null'
        })
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteTable('Todos');
  }
};
