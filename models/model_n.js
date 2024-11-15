const mongoose = require("mongoose");

function customValidator(num) {
  return num % 1000 == 0;
}

const nSideSchema = new mongoose.Schema({
  
});

module.exports = mongoose.model("nSideModel", nSideSchema, "nCollectionName"); // ezzel a névvel lesz létrehozva a kollekció.
