const express = require("express");
const router = express.Router();

const cousesController = require("../app/controllers/CousesController");

router.get("/:slug", cousesController.show);

module.exports = router;
