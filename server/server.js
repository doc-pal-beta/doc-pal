const express = require("express");
const app = express();
const path = require("path");
//controllers
const userController = require("./controllers/userController");
//parsers
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/authenticate", userController.authenticate, (req, res) => {
  res.status(200).send({
    loggedIn: res.locals.loggedIn,
    userType: res.locals.userType,
    currentUser: res.locals.currentUser,
  });
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
app.post(
  "/patients",
  userController.createPatient,
  userController.linkPatientToDoctor, 
  (req, res) => {
    res.status(200).json(res.locals.newPatient);
  }
);
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

app.post(
  "/doctors/login",
  userController.doctorLogin,
  userController.startSession,
  (req, res) => {
    res.status(200).json({
      currentUser: res.locals.currentUser,
      loggedIn: res.locals.loggedIn,
    });
  }
);

//PUT
app.put(
  "/doctors/:doctorId/patients/:patientId",
  userController.linkPatientToDoctor,
  (req, res) => {
    //this says that we PUT a new patient into the doctors collections
    res.status(200).json(res.locals.doctor);
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
//test
module.exports = app;
