const express = require("express");
const router = express.Router();

const cousesController = require("../app/controllers/CousesController");
router.get("/create", cousesController.create);
router.post("/store", cousesController.store);
router.get("/table", cousesController.table);
router.get("/:id/update", cousesController.update);

router.put("/:id", cousesController.updateDone);

router.delete("/:id", cousesController.delete)


router.get("/:slug", cousesController.show);

module.exports = router;
