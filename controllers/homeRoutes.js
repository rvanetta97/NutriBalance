const router = require('express').Router();
const { layouts } = require('chart.js');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route to get all users, requires authentication
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['last_name', 'ASC']], // Assuming the column name is 'username'
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('welcome', {
      layout: 'home',
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json(err);
  }
});

router.get('/welcome', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('welcome', {
    layout: 'home'
  });
});

// Route to render the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    layout: 'home'
  });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup', {
    layout: 'home'
  });
});

router.get('/overview',  (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
   }

  res.render('overview', {
    layout: 'main'
  });
});

router.get('/fitness',  (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('fitness', {
    layout: 'main'
  });
});

router.get('/nutrition',  (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('nutrition', {
    layout: 'main'
  });
});

module.exports = router;
