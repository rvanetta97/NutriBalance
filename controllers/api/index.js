const router = require('express').Router();
const fitnessRoutes = require('./fitnessRoutes');
const nutritionRoutes = require('./nutritionRoutes');
const goalRoutes = require('./goalRoutes');
const userRoutes = require('./userRoutes');

router.use('/fitness', fitnessRoutes);
router.use('/nutrition', nutritionRoutes);
router.use('/goals', goalRoutes);
router.use('/users', userRoutes);

module.exports = router;