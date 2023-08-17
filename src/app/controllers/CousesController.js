const Course = require("../modal/Course");
const { mutipleMongooseToObject, mongoToObject } = require("../../util/mongoose");

class CousesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/detail", { course: mongoToObject(course) });
      })
      .catch(next);
  }

  create(req, res) {
    res.render("courses/create");
  }

  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  update(req, res, next) {
    Course.findById(req.params.id)
      .then((courses) => {
        res.render("courses/update", { courses: mongoToObject(courses) });
      })
      .catch(next);
  }

  table(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("courses/table", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  updateDone(req, res, next) {
    // res.json(req.body)
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/courses/table")
      })
      .catch(next);
  }

  delete(req, res, next) {

    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back")
      })
      .catch(next);
  }
}
module.exports = new CousesController();
