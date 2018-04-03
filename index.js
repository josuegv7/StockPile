 // Main starting point of App:
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')
const keys = require('./config/dev');

require('./models/user');
require('./models/food')


const app = express();

 // DB Setup:
mongoose.connect(keys.mongoURI);

// App Setup:
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({type: '*/*'}))
router(app)

if (process.env.NODE_ENV === 'production'){
    // express will serve up production assets
    app.use(express.static('client/build'));

    // Express will serve up the index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

// SERVER SETUP:
const port = process.env.PORT || 4000
const server = http.createServer(app)
server.listen(port)
console.log('SERVER IS LISTENING ON:', port)

