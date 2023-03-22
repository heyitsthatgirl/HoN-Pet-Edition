const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User } = require("../models");
const pics = require("../models/pics");

router.get("/", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.render("loginpage");
    } else {
      res.redirect("/homepage");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/homepage", withAuth, async (req, res) => {
  // try {
  // 	console.log(req.session);
  // 	const displayPic = await pics.findOne({
  // 		where: { id: req.body.file },
  // 		include: [
  // 			{
  // 			attributes: ["file"]
  // 			}
  // 		],
  // 	});
  // 	// const user = userData.get({ plain: true });

  // 	// const picsData = await pics.findAll(req.params.email, {
  // 	// 	// where: { email: req.session.userEmail },
  // 	// 	include: [
  // 	// 		{
  //     //   model:pics,
  // 	// 			attributes: ["file"],
  // 	// 		},
  // 	// 	],
  // 	// });
  // const homePic = displayPic.map((pics) =>
  // //   pics.get({ plain: false })
  // );
  // 	res.render("homepage", {
  // 		homePic,
  // 	});
  // } catch (err) {
  // 	console.log(err);
  // 	res.status(500).json(err);
  // }
  try {
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profilepage", async (req, res) => {
  try {
    console.log(req.session);
    const userData = await User.findOne({
      where: { email: req.session.userEmail },
    });
    console.log(userData, "this is user data");
    const user = userData.get({ plain: true });

    const picsData = await pics.findAll({
      where: { email: req.session.userEmail },
      // 	include: [
      // 		{
      //   model:pics,
      // 			attributes: ["file", "vote"],
      // 		},
      // 	],
    });
    const uPics = picsData.map((pics) => pics.get({ plain: false }));
	console.log(uPics);
    res.render("profilepage", {
      user,
      uPics,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

//nothing but gets and renders
