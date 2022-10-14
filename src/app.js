const express = require('express')
const app = express() 

app.use((req, res, next) => {
    console.log('default middleware')

    next()
})

app.use('/users', (req, res, next) => {
    console.log('middleware users')
    res.send('<h1>users middleware</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>slash middleware</h1>')
})



app.listen(3000)