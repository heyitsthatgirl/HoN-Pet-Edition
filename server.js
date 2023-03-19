const multer = require("multer");
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();
// const upload = multer({ dest: "./public/uploads" });
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { cloudinaryConfig, uploader } = require("./config/cloudinaryConfig");
// const { urlencoded } = require("body-parser");
const pics = require("./models/pics");

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image2");

// /**
//  * @description This function converts the buffer to data url
//  * @param {Object} req containing the field object
//  * @returns {String} The data url from the string buffer
//  */
const dataUri = (req) =>
	parser.format(
		path.extname(req.file.originalname).toString(),
		req.file.buffer
	);

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

app.use("*", cloudinaryConfig);

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(urlencoded({ extended: false }));

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

// app.post("/upload_files", upload.array("files"), uploadFiles);

// app.post("/upload", multerUploads, (req, res) => {
// 	try {
// 		console.log("req.file :", req.file);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

app.post("/upload", multerUploads, (req, res) => {
	if (req.file) {
		const file = dataUri(req).content;
		return uploader
			.upload(file)
			.then(async (result) => {
				const image = result.url;
				console.log("This is the image url", image);
				console.log(req.session.userEmail);
				const pCreate = await pics.bulkCreate({
					email: "hope2@me.com",
					file: image,
				});
        console.log("this is pCreate", pCreate);
				const newPic = pCreate.get({ plain: true });
        

				if (!pCreate) {
					res.status(400).json({
						message: "something went wrong, please try again",
					});
				}

				return res.status(200).json({
					messge: "Your image has been uploded successfully to cloudinary",
					data: {
						image,
						newPic,
					},
				});
			})
			.catch((err) =>
				res.status(400).json({
					messge: "someting went wrong while processing your request",
					data: {
						err,
					},
				})
			);
	}
});

// function uploadFiles(req, res) {
// 	console.log(req.body, "+++++++");
// 	console.log(req.files, "----------");
// 	console.log(req.files[0].filename, "]]]]]]]]]");
// 	res.json({ message: "Successfully uploaded files" });
// 	// res.send(req.files);
// }

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
