const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');

router.get('/', withAuth, async (req, res) => {
  try {
   

    res.render('loginpage', {
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/homepage', async (req, res) => {
  try {
  
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profilepage', async (req, res) => {
  try {
    console.log(req.session)
    const userData = await User.findOne({
      where: { email: req.session.userEmail,
    }});
    console.log(userData, "this is user data")
    const user = userData.get({ plain: true });

  res.render('profilepage',{
  user,
  logged_in: req.session.logged_in,
  });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

//nothing but gets and renders