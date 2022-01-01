const models = require("../models/userModels");
const { Visit, Doctor, Patient } = models;

const userController = {};
//GET
userController.getPatient = (req, res, next) => {
  Patient.findOne({ id: req.params.id }, (error, success) => {
    console.log(error, success);
    if (error) next(error);
    res.locals.patient = success;
    next();
  });
};
userController.getPatients = (req, res, next) => {
  Patient.find(req.query, (error, success) => {
    console.log(error, success);
    if (error) next(error);
    res.locals.patients = success;
    next();
  });
};

userController.getDoctors = (req, res, next) => {
  // query or empty query for all
  Doctor.find(req.query, (error, success) => {
    if (error) next(error);
    res.locals.doctors = success;
    next();
  });
};
userController.getDoctor = (req, res, next) => {
  // expects param id /doctors/doctorObjectId
  Doctor.findOne({ _id: req.params.id }, (error, success) => {
    if (error) next(error);
    res.locals.doctor = success;
    next();
  });
};

userController.getVisits = (req, res, next) => {
  Visit.find(req.query, (error, success) => {
    console.log(error, success);
    if (error) next(error);
    res.locals.visits = success;
    next();
  });
};

//POST
userController.createDoctor = (req, res, next) => {
  Doctor.create(req.body, (error, success) => {
    if (error) res.sendStatus(400).json(error);
    res.locals.newDoctor = success;
    return next();
  });
};
userController.createPatient = (req, res, next) => {
  Patient.create(req.body, (error, success) => {
    if (error) next(error);
    res.locals.newPatient = success;
    next();
  });
};
userController.createVisit = (req, res, next) => {
  Visit.create(req.body, (error, success) => {
    if (error) next(error);
    res.locals.newVisit = success;
    next();
  });
};
userController.linkVisitToPatient = (req, res, next) => {
  console.log(req.body, res.locals.newVisit);
  Patient.findOne({ _id: req.body.patientId }, (error, patient) => {
    console.log("hi");
    patient.visits.push({ visitId: res.locals.newVisit._id });
    console.log("hi");
    patient.save((err) => {
      console.log("hi");
      if (err) next(err);
      next();
    });
  });
};

module.exports = userController;
