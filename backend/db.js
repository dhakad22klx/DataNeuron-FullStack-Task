const { default: mongoose } = require("mongoose");
require('dotenv').config()
const URI = process.env.URI;
mongoose.connect(URI).then(console.log("connected"));

const DataSchema = new mongoose.Schema({
   content : String
})

const Data = mongoose.model('Data', DataSchema);

module.exports = {
    Data
}