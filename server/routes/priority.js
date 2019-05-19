const express = require('express');
const router = express.Router();
const model = require('../models/index');
const errorMessage = require('../util/errorMessage');

router.get('/priorities', (req, res) => {
  model.Priority.findAll({})
    .then(priorities => {
      res.json({
        error: false,
        priorities
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        data: {
          error: true,
          errorMessage: errorMessage(0006)
        }
      });
    });
});

module.exports = router;
