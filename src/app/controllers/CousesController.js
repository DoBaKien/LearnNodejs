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

  create(req, res) {
    res.render("create");
  }

  store(req, res) {
    // res.json(req.body);
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CousesController();
