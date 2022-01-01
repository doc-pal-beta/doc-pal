const models = require("../models/userModels");
const { Visit, Doctor, Patient } = models;

const userController = {};

userController.createDoctor = (req, res, next) => {
  //const { firstName, lastName, password } = req.body;
  console.log(req.body)
  
    Doctor.create(req.body, (error, success) => {
      console.log("hi")
      console.log(error);
      console.log(success);
      if (error) res.sendStatus(400).json(error);
      res.locals.doctor = success;
      return next();
    })
};

userController.createPatient = (req, res, next) => {
  Patient.create(req.body, (error, success) => {
    if (error) next(error);
    res.locals.currentPatient = success;
    next();
  })
}

userController.getPatientInfo = (req, res, next) => {
  // Expect to recieve query: /getPatientInfo/?lastName=<LASTNAME>&dateOfBirth=<MM/DD/YYYY>
  const {lastName, dateOfBirth}  = req.query
  Patient.findOne({lastName, dateOfBirth}, (error, success) => {
    if (error) next(error);
    res.locals.currentPatient = success;
    next();
  })
}

module.exports = userController;