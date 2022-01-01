const express = require("express");
const app = express();
const path = require("path");
const userController = require("./controllers/userController");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Test");
});

//GET
//get patients through query search or empty for all
app.get("/patients", userController.getPatients, (req, res) => {
  res.status(200).json(res.locals.patients);
});
//get patient by id
app.get("/patients/:id", userController.getPatient, (req, res) => {
  res.status(200).json(res.locals.patient);
});
//get doctors, all or by query
app.get("/doctors", userController.getDoctors, (req, res) => {
  res.status(200).json(res.locals.doctors);
});
//get doctor by id
app.get("/doctors/:id", userController.getDoctor, (req, res) => {
  res.status(200).json(res.locals.doctor);
});
app.get("/visits", userController.getVisits, (req, res) => {
  res.status(200).json(res.locals.visits);
});

//POST
app.post("/doctors", userController.createDoctor, (req, res) => {
  res.status(200).json(res.locals.newDoctor);
});
app.post("/patients", userController.createPatient, (req, res) => {
  res.status(200).json(res.locals.patients);
});
app.post(
  "/visits",
  userController.createVisit,
  userController.linkVisitToPatient,
  (req, res) => {
    //Doctor creates OR selects a patient from his patient list
    //This route expects all visit information AS WELL AS doctorID and patientId
    //will automatically add visit to patients records.
    res.status(200).json(res.locals.newVisit);
  }
);

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

app.listen(3000, () => console.log("listening on port 3000")); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
