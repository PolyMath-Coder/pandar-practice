const express = require('express')

console.log('this is us')
const app = express()

app.get('/', (req, res) => {
    res.json({
        status: true
    })
})

app.listen(3000, () => {
    console.log('server now live...')
})

console.log('This is my code...')