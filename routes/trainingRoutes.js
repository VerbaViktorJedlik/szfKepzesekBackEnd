const express = require("express");
const { getTrainings, getTraining, createTraining, updateTraining, deleteTraining } = require("../controllers/trainings");
const nSideModel = require("../models/model_n");
const oneSideModel = require("../models/model_1");


const router = express.Router();

router.route('/').get(getTrainings).post(createTraining);

router.route('/:id').get(getTraining).put(updateTraining).delete(deleteTraining);


module.exports = router;
