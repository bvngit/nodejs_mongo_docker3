const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async(req, res) => {
    try {
        //res.send('Get request')
        const todos = await Todo.find();
        res.json(todos);
    } catch(err) {
        res.send('Error ' + err);
    }
})

router.get('/:id', async(req, res) => {
    try {
        //res.send('Get request')
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch(err) {
        res.send('Error ' + err);
    }
})

router.post('/', async(req, res) => {
    try {
       const todo = new Todo({
           description: req.body.description,
           complete: req.body.complete
       });
       const a1 = await todo.save(todo);
       res.json(a1);
    } catch(err) {
        res.send('Error ' + err);
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if( todo != null ) {
            todo.description = req.body.description;
            todo.complete = req.body.complete;
            const a1 = await todo.save();
            res.json(a1);
        }
        else {
            res.send('Todo[' + req.params.id + '] is not found');
        }
    } catch(err) {
        res.send('Error ' + err);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        //res.send('Get request')
        const todo = await Todo.findById(req.params.id)
        if( todo ) {
            todo.deleteOne(todo);
            res.send('Todo[' + req.params.id + '][' + todo.description + '] deleted successfluly')
        }
        else {
            res.send('Todo[' + req.params.id + '] not found. Could not be deleted')
        }
    } catch(err) {
        res.send('Error ' + err)
    }
})
module.exports = router;