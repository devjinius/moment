'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert('Statuses', [{ desc: 'todo' }, { desc: 'doing' }, { desc: 'done' }], {})
      .then(() =>
        queryInterface.bulkInsert(
          'Todos',
          [
            {
              title: 'test',
              content: 'this is test data',
              status: '1'
            }
          ],
          {}
        )
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
