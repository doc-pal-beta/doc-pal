const mongoose = require("mongoose");
const pass = require('./pass.json')
const MONGO_URI = `mongodb+srv://${pass}@cluster0.ftr2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "dndcharactersheets",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

  const Schema = mongoose.Schema;






  module.exports = {
  }