const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// User registration 
router.post('/', async (req, res) => {
  try {
    // Check for existing user with the same email
    const existingUser = await User.findOne({ where: { email: req.body.email } });
    if (existingUser) {
      res.status(400).json({ message: 'Email already in use, please try another one' });
      return;
    }
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const formData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      weight: req.body.weight,
      email: req.body.email,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.user_id = formData.id;
      req.session.logged_in = true;

      res.status(200).json(formData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// User logout
router.post('/logout', withAuth, (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;