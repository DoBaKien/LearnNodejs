const express = require("express");
const router = express.Router();

const cousesController = require("../app/controllers/CousesController");

router.get("/create", cousesController.create);
router.post("/store", cousesController.store);
router.get("/:slug", cousesController.show);

module.exports = router;
