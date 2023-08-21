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

    Promise.all([Course.find({ $or: [{ deleted: { $exists: false } }, { deleted: false }] }), Course.find({ deleted: true })])
      .then(([courses, count]) => {
        res.render("courses/table", { count: count.length, courses: mutipleMongooseToObject(courses) });
      }).catch(next);

    // Course.find({ deleted: true })
    //   .then((count) => {
    //     console.log(count.length);
    //   })
    //   .catch(next);

    // Course.find({ $or: [{ deleted: { $exists: false } }, { deleted: false }] })
    //   .then((courses) => {
    //     res.render("courses/table", { courses: mutipleMongooseToObject(courses) });
    //   })
    //   .catch(next);
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
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back")
      })
      .catch(next);
  }

  deleteforce(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back")
      })
      .catch(next);
  }


  deletedCourses(req, res, next) {
    Course.find({ deleted: true })
      .then((courses) => {
        res.render("courses/trash", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back")
      })
      .catch(next);
  }

  handleForm(req, res, next) {
    switch (req.body.action) {
      case 'asd':
        res.redirect("back")
        break
      case 'delete':
        Course.delete({ _id: { $in: req.body.coursesId } })
          .then(() => {
            res.redirect("back")
          })
          .catch(next);
        break
      default:
        res.json({ message: "asd" })
    }
  }

  restoreForm(req, res, next) {
    switch (req.body.action) {
      case 'asd':
        res.redirect("back")
        break
      case 'restore':
        Course.restore({ _id: { $in: req.body.coursesId } })
          .then(() => {
            res.redirect("back")
          })
          .catch(next);
        break
      case 'delete':
        Course.deleteOne({ _id: { $in: req.body.coursesId } })
          .then(() => {
            res.redirect("back")
          })
          .catch(next);
        break
      default:
        res.json({ message: "asd" })
    }
  }


}
module.exports = new CousesController();
