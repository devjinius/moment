const express = require('express');
const router = express.Router();
const model = require('../models/index');

router.get('/todos', (req, res) => {
  model.Todo.findAll({})
    .then(todo => {
      res.json({
        error: false,
        data: todo
      });
    })
    .catch(err => {
      res.json({
        error: true,
        data: {},
        error: err
      });
    });
});

router.get('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todos => {
      res.json({
        error: false,
        data: todos
      });
    })
    .catch(err => {
      res.json({
        error: true,
        data: {},
        error: err
      });
    });
});

router.post('/todo', (req, res) => {
  model.Todo.create(req.body)
    .then(todo =>
      res.json({
        error: false,
        data: todo
      })
    )
    .catch(err => {
      res.json({
        error: true,
        errormsg: err
      });
    });
});

router.delete('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todo => {
      todo.destroy();
      res.json({
        error: false,
        data: todo
      });
    })
    .catch(err => {
      res.json({
        error: true,
        message: err.message
      });
    });
});

router.patch('/todo/:id', (req, res) => {
  model.Todo.findOne({ where: { id: req.params.id } })
    .then(todo => {
      todo.update(req.body).then(todo => {
        res.json({
          error: false,
          data: todo
        });
      });
    })
    .catch(err => {
      res.json({
        error: true,
        message: err.message
      });
    });
});

module.exports = router;
