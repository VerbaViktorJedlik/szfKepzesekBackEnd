const express = require("express");
const nSideModel = require("../models/model_n");
const oneSideModel = require("../models/model_1");

const router = express.Router();

router.get('/trainings', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all trainings ' })
})

router.get('/trainings/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get training ${req.params.id}` })
})

router.post('/trainings', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new training' })
})

router.put('/trainings/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update training ${req.params.id}` })
})

router.delete('/trainings/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete training ${req.params.id}` })
})


module.exports = router;
