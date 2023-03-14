const router = require('express').Router();
// const user = require(user model);

// /api/user/login
router.post('/login', async (req, res) => {
    try {
    const userData = await User.findOne({where: {email: req.body.email}});
    if(!userData) {
        res.status(400).json({message: "user not found"});
        return;
    }

    const userPass = userData.checkPassword(req.body.password);
    if(!userPass) {
        res.status(400).json({message: "user not found"});
        return;
    }

    req.session.save(() => {
        req.session.userEmail = userData.email;
        req.session.logged_in = true;
        req.status(200).json({message: "logged in!", userData});
    })
    } catch (err) {
        res.status(500).json(err);
    }


});

router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;

// adding data with post/put/patch/delete

// logged_in becomes its own variable

