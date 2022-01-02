const models = require("../models/userModels");
const { Visit, Doctor, Patient } = models;
const bcrypt = require("bcrypt");
const userController = {};
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

//GET
userController.getPatient = (req, res, next) => {
  Patient.findOne({ id: req.params.id })
    .populate(["primaryDoctor", "visits"])
    .exec((err, success) => {
      if (err) next(err);
      res.locals.patient = success;
      next();
    });
};
userController.getPatients = (req, res, next) => {
  Patient.find(req.query)
    .populate(["primaryDoctor", "visits"])
    .exec((err, success) => {
      console.log(err, success);
      if (err) next(err);
      res.locals.patients = success;
      next();
    });
};

userController.getDoctors = (req, res, next) => {
  // query or empty query for all
  Doctor.find(req.query)
    .populate("patients")
    .exec((err, success) => {
      if (err) next(err);
      res.locals.doctors = success;
      next();
    });
};;
userController.getDoctor = (req, res, next) => {
  // expects param id /doctors/doctorObjectId
  Doctor.findOne({ _id: req.params.id })
    .populate("patients")
    .exec((err, doctor) => {
      console.log(err, doctor);
      if (err) next(err);
      res.locals.doctor = doctor;
      next();
    });
};

userController.getVisits = (req, res, next) => {
  Visit.find(req.query)
    .populate(["patientId", "doctorId"])
    .exec((error, success) => {
      if (error) next(error);
      res.locals.visits = success;
      next();
    });
};

//POST
userController.createDoctor = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (error, hash) => {
    Object.assign(req.body, { password: hash });
    Doctor.create(req.body, (error, success) => {
      if (error) res.sendStatus(400).json(error);
      res.locals.newDoctor = success;
      return next();
    });
  });
};
userController.createPatient = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (error, hash) => {
    Object.assign(req.body, { password: hash });
    Patient.create(req.body, (error, success) => {
      if (error) next(error);
      res.locals.newPatient = success;
      req.params.doctorId = req.body.primaryDoctor;
      req.params.patientId = success._id;
      next();
    });
  });
};
userController.createVisit = (req, res, next) => {
  Visit.create(req.body, (error, success) => {
    if (error) next(error);
    res.locals.newVisit = success;
    next();
  });
};

//Link/Add to Collection
userController.linkVisitToPatient = (req, res, next) => {
  Patient.findOne({ _id: req.body.patientId }).exec((error, patient) => {
    patient.visits.push(res.locals.newVisit._id);
    patient.save((err) => {
      if (err) next(err);
      next();
    });
  });
};
userController.linkPatientToDoctor = (req, res, next) => {
  const { doctorId, patientId } = req.params;
  Doctor.findOne({ _id: doctorId }).exec((error, doctor) => {
    doctor.patients.push(patientId);
    doctor.save((err) => {
      if (err) next(err);
      res.locals.doctor = doctor;
      next();
    });
  });
};

//Session Storage and store user meta data through JWT
userController.startSession = (req, res, next) => {
  if (res.locals.loggedIn) {
    privateKey = fs.readFileSync(
      path.join(__dirname, "./privatekey.json"),
      "utf-8"
    );
    //ARG 1 JWT USER META DATA ***NO SENSITIVE INFO***
    jwt.sign(
      {
        cookieId: res.locals.sessionId,
        userId: res.locals.currentUser._id,
      },
      privateKey, //ARG 2 PRIVATE KEY
      {
        expiresIn: 60 * 60 * 2, //ARG 3 OPTIONS: 2 hour session expiry
      },
      (err, token) => {
        // ARG 4 CALLBACK
        res.cookie("JWT", token, { httpOnly: true });
        next();
      }
    );
  } else {
    next();
  }
};
//Check if user has a session storage JWT
userController.authenticate = async (req, res, next) => {
  res.locals.loggedIn = false;
  const token = req.cookies.JWT;
  const privateKey = fs.readFileSync(
    path.join(__dirname, "./privatekey.json"),
    "utf-8"
  );

  const verified = await jwt.verify(token, privateKey, (error, payload) => {
    if (error) return next(error);
    return payload;
  });

  Doctor.findOne({ _id: verified.userId })
    .populate("patients")
    .exec((error, doctor) => {
      console.log(doctor);
      if (error) {
        Patient.findOne({ _id: verified.userId })
          .populate("visits")
          .exec((error, patient) => {
            if (error) return next(error);
            res.locals.currentUser = patient;
            res.locals.loggedIn = true;
            res.locals.userType = "patient";
            return next();
          });
      }
      res.locals.currentUser = doctor;
      res.locals.loggedIn = true;
      res.locals.userType = "doctor";
      return next();
    });
};

userController.doctorLogin = (req, res, next) => {
  const { firstName, lastName, password } = req.body;
  Doctor.findOne({ firstName, lastName })
    .populate("patients")
    .exec((error, doctor) => {
      console.log(error, doctor);
      bcrypt.compare(password, doctor.password, (error, result) => {
        console.log(result);
        if (error) return next(error);
        if (result === true) {
          res.locals.currentUser = doctor;
          res.locals.loggedIn = true;
          return next();
        } else if (result === false) {
          res.locals.loggedIn = false;
          return next();
        }
      });
    });
};

userController.patientLogin = (req, res, next) => {
  const { firstName, lastName, password } = req.body;
  Patient.findOne({ firstName, lastName })
    .populate("visits")
    .exec((error, patient) => {
      bcrypt.compare(password, patient.password, (error, result) => {
        if (error) return next(error);
        if (result === true) {
          res.locals.currentUser = patient;
          res.locals.loggedIn = true;
          return next();
        } else if (result === false) {
          res.locals.loggedIn = false;
          return next();
        }
      });
    });
};

module.exports = userController;
