const mongoose = require('mongoose')
//const url = 'mongodb://localhost:27017/test'
const url = 'mongodb://mongodb/test'

exports.initializeMongo = function() {
    mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
    const con = mongoose.connection
    con.on('open', () => {
        console.log('mongodb connected...')
        //addTodos(); 
    })
}

Todo = exports.Todo = require('../models/todo');

// var addTodos = function() {
//     var todo = new Todos({
//         description: "Go get flu shot",
//         complete: false
//     });

//     todo.save( function(err, fluffy) {
//         if(err)
//             return console.error(err);
//         console.log('Added a new todo in database');
//     });
// }

