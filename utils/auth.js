const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/loginpage');
  } else {
    next();
  }
};

module.exports = withAuth;