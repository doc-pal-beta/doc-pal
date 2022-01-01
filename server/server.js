const express = require('express');
const app = express();
const path = require('path');
const userController = require("./controllers/userController");


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Test');
});

app.post('/doctor', userController.createDoctor,  (req, res) => {
    console.log("I made it to docCreate");
    res.status(200).json(res.locals.doctor);
  });

app.post('/patient', userController.createPatient, (req, res) => {
    res.status(200).json(res.locals.currentPatient)
})

app.get('/patientInfo', userController.getPatientInfo, (req, res) => {
    res.status(200).json(res.locals.currentPatient)
})

app.use("*", (req, res) => {
res.status(404).send("Page not Found");
});

app.use((err, req, res, next) => {
const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
};
const errorObj = Object.assign({}, defaultErr, err);
res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening on port 3000')); //listens on port 3000 -> http://localhost:3000/

module.exports = app;