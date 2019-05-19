'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'priorities',
      [
        { label: '매우 중요', color: 'red' },
        { label: '중요', color: 'orange' },
        { label: '보통', color: 'grey' },
        { label: '중요하지 않음', color: 'black' }
      ],
      {}
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
