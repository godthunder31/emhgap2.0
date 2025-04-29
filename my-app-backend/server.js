const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myApp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schemas and Models
const assessorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobileNumber: String,
  qualification: String,
  occupation: String,
  email: String,
  password: String,
});

const assesseeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobileNumber: String,
});

const Assessor = mongoose.model('Assessor', assessorSchema);
const Assessee = mongoose.model('Assessee', assesseeSchema);

// Routes
app.post('/api/assessor', async (req, res) => {
  try {
    const assessor = new Assessor(req.body);
    await assessor.save();
    res.status(201).send(assessor);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/api/assessee', async (req, res) => {
  try {
    const assessee = new Assessee(req.body);
    await assessee.save();
    res.status(201).send(assessee);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});