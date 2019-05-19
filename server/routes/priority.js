const express = require('express');
const router = express.Router();
const model = require('../models/index');

router.get('/priorities', (req, res) => {
  model.Priority.findAll({})
    .then(priorities => {
      res.json({
        error: false,
        priorities
      });
    })
    .catch(err => {
      res.json({
        error: true,
        data: {
          error: err
        }
      });
    });
});

module.exports = router;
