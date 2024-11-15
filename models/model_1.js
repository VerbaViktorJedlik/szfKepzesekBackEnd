const mongoose = require("mongoose");

const oneSideSchema = new mongoose.Schema({
  
});

module.exports = mongoose.model(
  "oneSideModel",
  oneSideSchema,
  "oneCollectionName"
);
