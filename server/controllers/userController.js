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

module.exports = userController;