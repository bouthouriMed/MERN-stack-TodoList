const express = require('express');
const mongoose = require('mongoose');
const config = require ('config');

// Create an express server
const app = express();

// Express bodyParser
app.use(express.json());

// Connect to the databse
mongoose.connect(config.get("mongoURI"),{useNewUrlParser: true ,useUnifiedTopology:true, useCreateIndex:true })
.then(() => console.log("successfully connected to the database"))
.catch( () => console.log("failed to connect to the database"));


// Use routes
app.use('/api/todos',require('./routes/api/todosRoute'))

// Listen to the server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => console.log(`server running successfully on port ${PORT}`))