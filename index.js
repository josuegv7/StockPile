 // Main starting point of App:
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')
const keys = require('./config/keys');

 // DB Setup:
// mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

// App Setup:
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
router(app)

if (process.env.NODE_ENV === 'production'){
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express will serve up the index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

// SERVER SETUP:
const PORT = process.env.PORT || 4000
app.listen(PORT);
