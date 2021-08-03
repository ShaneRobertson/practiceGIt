console.log('starting a script....')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

server.use(morgan('dev'))
server.use(bodyParser.json())

server.use(express.static('public'))

server.get('/', (req, res) => {
    console.log('home route!')
    res.send('hello there welcome to the home route!!')
})

server.get('/contacts', (req, res) => {
    
    res.send({contactList: ['shane', 'marcy', 'alaina', 'seth', 'caleb', 'lilah']})
})

server.post('/contacts', (req, res) => {
    const {name} = req.body
    console.log('name in req.body: ', name)
    console.log('POST route for contacts')
    res.send({message: `${name} will be added`})
}) 



server.listen(3000, () => {
    console.log('listening on port 3000')
})

// const {myName} = require('./constants/myFile.js')
// console.log('myNameis: ', myName)

console.log('ending the script...')