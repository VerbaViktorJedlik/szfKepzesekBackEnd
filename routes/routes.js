const express = require("express");
const nSideModel = require("../models/model_n");
const oneSideModel = require("../models/model_1");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = new nSideModel({
    name: req.body.name,
    foreignKey: req.body.foreignKey,
  });

 
});

router.get("/", async (req, res) => {
  
});

router.get("/:id", async (req, res) => {
  
});

//Update by ID Method
router.patch("/:id", async (req, res) => {
  
});

//Delete by ID Method
router.delete("/:id", async (req, res) => {
  
});

module.exports = router;
