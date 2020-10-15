const express = require('express');
const app = express();

const database = require('./database/database');
database.initializeMongo();

app.use(express.json())

const indexRouter = require('./routes/index')
const todoRouter = require('./routes/todo')

app.use('/', indexRouter)
app.use('/todos', todoRouter)

app.listen(3000, () => {
    console.log('Server started...')
})