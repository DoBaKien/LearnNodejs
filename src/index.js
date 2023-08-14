const express = require("express");
// const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan("combined"));
//  [0] ::1 - - [14/Aug/2023:02:18:05 +0000] "GET /favicon.ico HTTP/1.1" 404 150
//  "http://localhost:3000/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
//  Chrome/115.0.0.0 Safari/537.36"
// Morgan cho thông tin ở trong console

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.set("views", __dirname + "/resources/views");

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
