const router = require('express').Router();
const { User } = require('../../models');

// /api/user/login
router.post('/login', async (req, res) => {
    try {
        console.log("start login");
    const userData = await User.findOne({where: {email: req.body.email}});
    console.log("here is userdata", userData);
    if(!userData) {
        res.status(400).json({message: "user not found"});
        return;
    }

    // const userPass = userData.checkPassword(req.body.password);
    // if(!userPass) {
    //     res.status(400).json({message: "user not found"});
    //     return;
    // }

    req.session.save(() => {
        req.session.userEmail = userData.email;
        req.session.logged_in = true;
        req.session.id = userData.id
        console.log("here is req.session",req.session);
        res.status(200).json({message: "logged in!", userData});
    })
    console.log('end login');
    } catch (err) {
        res.status(500).json(err);
    }


});

router.get('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
    else {
        res.status(404).end();
    }
});

router.post('/create', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.create({ email, password });
        req.session.save(() => {
          req.session.userEmail = userData.email;
          req.session.logged_in = true;
          req.session.id = userData.id
          res.status(200).json({ message: 'registered and logged in!', userData });
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;

// adding data with post/put/patch/delete

// logged_in becomes its own variable

