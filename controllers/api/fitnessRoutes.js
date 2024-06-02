const router = require('express').Router();
const { Fitness } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const { fetchWorkout } = require('../../services/workoutAPI')

const calculateCaloriesBurned = (duration, met, weight) => {
  return (duration * met * weight) / 60;
};

router.post('/', withAuth, async (req, res) => {
  try {
    // Fetch the user to get the weight
    const user = await User.findByPk(req.session.user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { duration, activity_name, date } = req.body;
    
    // Fetch fitness data
    const Fitness = await fetchWorkout(activity_name);
    const met_level = '4';

    // Calculate calories burned using the helper function
    const caloriesBurned = calculateCaloriesBurned(duration, met, user.weight);
    // Create a new fitness entry
    const newFitness = await Fitness.create({
      user_id: req.session.user_id,
      activity_name,
      date,
      met_level,
      duration,
      calories_burned: caloriesBurned,
    });
    // Respond with the created entry
    res.status(200).json(newFitness);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

    router.delete('/:id', async (req, res) => {
      try {
        const fitnessData = await Fitness.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!fitnessData) {
          res.status(404).json({ message: 'No fitness data found with this id!' });
          return;
        }
    
        res.status(200).json(fitnessData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/fitness/:id', async (req, res) => {
  try {
    const fitnessData = await Fitness.findByPk(req.params.id, {
      attributes: [
        'id',
        'user_id',
        'activity_name',
        'duration',
        'calories_burned',
        'date',
        'met_level',
      ],
    });

    if (!fitnessData) {
      res.status(404).json({ message: 'No fitness data found with this id!' });
      return;
    }

    const fitness = fitnessData.get({ plain: true });
    res.render('fitness', { fitness });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;