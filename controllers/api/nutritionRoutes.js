const router = require('express').Router();
const { Nutrition } = require('../../models');
const withAuth = require('./utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newNutrition = await Nutrition.create({ 
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newNutrition);
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