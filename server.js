const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
// const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const routes = require("./controllers");
const sequelize = require("./config/connection");
// const helpers = require('./utils/helpers');

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// // cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// app.post("/image", (req, res) => {
//   upload(req, res, (err) => {
//    if(err) {
//      res.status(400).send("Something went wrong!");
//    }
//    console.log(req.body);
//    res.send(req.file);
//  });
// });

// app.post("/upload_files", uploadFiles);
// function uploadFiles(req, res) {
//   console.log(req.body);
// }

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
    // res.send(req.files);
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
