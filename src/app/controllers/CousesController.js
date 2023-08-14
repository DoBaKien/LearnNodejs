const Course = require("../modal/Course");
const { mongoToObject } = require("../../util/mongoose");

class CousesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("detail", { course: mongoToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CousesController();
