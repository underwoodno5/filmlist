const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const films = require('./routes/api/films');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//MongoDB config
const db = require('./config/keys').mongoURI;

//connecting to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err));

//routes
app.use('/api/films', films);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Ears open on ${port}`));
