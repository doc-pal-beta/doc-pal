const express = require('express');
const app = express();
const path = require('path');
const userController = require("./controllers/userController");


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Test');
});

app.post('/createDoctor', userController.createDoctor,  (req, res) => {
    console.log("I made it to docCreate");
    res.status(200).json(res.locals.doctor);
  });

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/

module.exports = app;