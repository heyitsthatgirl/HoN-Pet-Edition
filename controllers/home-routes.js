const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

router.get('/', async (req, res) => {
  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

    // const galleries = dbGalleryData.map((gallery) =>
    //   gallery.get({ plain: true })
    // );

    res.render('loginpage', {
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

    // const galleries = dbGalleryData.map((gallery) =>
    //   gallery.get({ plain: true })
    // );

    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

//nothing but gets and renders