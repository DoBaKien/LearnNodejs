const express = require("express");
const router = express.Router();

const cousesController = require("../app/controllers/CousesController");
router.get("/create", cousesController.create);
router.post("/store", cousesController.store);
router.get("/table", cousesController.table);
router.post("/handle-form", cousesController.handleForm);

router.post("/restore-form", cousesController.restoreForm);

router.get("/:id/update", cousesController.update);
router.get("/trash", cousesController.deletedCourses)
router.patch("/:id/restore", cousesController.restore);

router.put("/:id", cousesController.updateDone);

router.delete("/:id", cousesController.delete)
router.delete("/:id/force", cousesController.deleteforce)


router.get("/:slug", cousesController.show);

module.exports = router;
