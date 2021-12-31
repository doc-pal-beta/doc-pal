const models = require("../models/userModels");
// const { CharacterSheet, User } = models;

const userController = {};

userController.createDoc = (req, res, next) => {
  const { firstName, lastName, password } = req.body;

  const newDoc = new Doc({ firstName: firstName, lastName: lastName, password: password });

  try {
    const result = Doc.create(newDoc);
    res.locals.doc = result;
    return next();
  } catch (error) {
    res.sendStatus(400).json(error);
  }
};

module.exports = userController;