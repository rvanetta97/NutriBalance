const router = require('express').Router();
const { User, Nutrition } = require('../../models');
const withAuth = require('../../utils/auth');
const { getFoodDetails } = require('../../services/mealAPI')

router.post('/', async (req, res) => {
  try {
    // Fetch the user to get the weight
    const user = await User.findByPk(req.session.user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { meal_name, date } = req.body;

    const Nutrition = await getFoodDetails(food);

    if (!nutritionDetails || !nutritionDetails.calories || !nutritionDetails.fat || !nutritionDetails.protein) {
      return res.status(400).json({ error: 'Request cannot be completed, please try again later' });
    }

    // Create a new nutrition entry
    const newNutrition = await Nutrition.create({
      user_id: req.session.user_id,
      meal_name,
      date,
      calories: nutritionDetails.calories,
      fat: nutritionDetails.fat,
      protein: nutritionDetails.protein
    });

    // Respond with the created entry
    res.status(200).json(newFitness);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const nutritionData = await Nutrition.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!nutritionData) {
      res.status(404).json({ message: 'No nutrition data found with this id!' });
      return;
    }

    res.status(200).json(nutritionData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const nutritionData = await Nutrition.findByPk(req.params.id, {
      attributes: [
        'id',
        'user_id',
        'meal_name',
        'calories',
        'fat',
        'protein',
        'date',
      ],
    });

    if (!nutritionData) {
      res.status(404).json({ message: 'No nutrition data found with this id!' });
      return;
    }

    const nutrition = nutritionData.get({ plain: true });
    res.render('nutrition', { nutrition });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;