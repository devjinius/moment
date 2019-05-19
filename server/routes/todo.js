const express = require('express');
const router = express.Router();
const model = require('../models/index');

router.get('/todos', (req, res) => {
  model.Todo.findAll({})
    .then(todos => {
      res.json({
        error: false,
        todos
      });
    })
    .catch(err => {
      res.json({
        error: true,
        error_message: err.message
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
      res.json({
        error: true,
        error_message: err.message
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
      res.json({
        error: true,
        error_message: err.message
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
      res.json({
        error: true,
        error_message: err.message
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
      res.json({
        error: true,
        error_message: err.message
      });
    });
});

module.exports = router;
