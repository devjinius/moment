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
            allowNull: false
          },
          status: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
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
        queryInterface
          .createTable(
            'statuses',
            {
              id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
              },
              desc: {
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
          .then(() =>
            queryInterface.addConstraint('Todos', ['status'], {
              type: 'foreign key',
              references: {
                table: 'statuses',
                field: 'id'
              },
              onDelete: 'cascade'
            })
          )
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};