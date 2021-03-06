const mongoose = require("mongoose");
const pass = require("./pass.json");
const MONGO_URI = `mongodb+srv://${pass}@cluster0.ftr2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "docPalDB",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  //temporaryPassword: { type: String },
  password: { type: String },
  dateOfBirth: { type: String, required: true }, // MM/DD/YYYY
  sex: String,
  language: String,
  address: String,
  primaryDoctor: {
    type: Schema.Types.ObjectId,
    ref: "doctor",
  },
  visits: [
    {
      type: Schema.Types.ObjectId,
      ref: "visit",
    },
  ],
});

const doctorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  licenseNumber: { type: Number, required: true },
  title: String,
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "patient",
    },
  ],
});

const visitSchema = new Schema({
  date: { type: String, required: true }, // MM/DD/YYYY
  //SOAP NOTE: S:subjective complaints, O:objective observations, A:assessment/diagnosis, P:plan
  dz3qE1: String,
  objective: String,
  assessment: String,
  plan: String,
  prescription: String,
  homeCare: String,
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
});

const Visit = mongoose.model("visit", visitSchema);

const Patient = mongoose.model("patient", patientSchema);

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = {
  Visit,
  Patient,
  Doctor,
};
