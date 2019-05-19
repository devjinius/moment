const express = require('express');
const router = express.Router();
const model = require('../models/index');
const errorMessage = require('../util/errorMessage');
const sequelize = require('sequelize');

router.get('/todos', (req, res) => {
  model.Todo.findAll({})
    .then(todos => {
      res.json({
        error: false,
        todos
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0001)
      });
    });
});

router.get('/todos/:order', (req, res) => {
  console.log(req.params.order);
  model.Todo.findAll({
    order: [[sequelize.fn('isnull', sequelize.col(req.params.order))], [req.params.order, 'ASC']]
  })
    .then(todos => {
      res.json({
        error: false,
        todos
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0001)
      });
    });
});

router.get('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todo => {
      res.json({
        error: false,
        todo
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0002)
      });
    });
});

router.post('/todo', (req, res) => {
  model.Todo.create(req.body)
    .then(todo =>
      res.json({
        error: false,
        todo
      })
    )
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0003)
      });
    });
});

router.delete('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todo => {
      todo.destroy();
      res.json({
        error: false,
        todo
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0004)
      });
    });
});

router.patch('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todo => {
      todo.update(req.body).then(todo => {
        res.json({
          error: false,
          todo
        });
      });
    })
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true,
        errorMessage: errorMessage(0005)
      });
    });
});

module.exports = router;
