const router = require('express').Router();
const { Fitness } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFitness = await Fitness.create({ 
      user_id: req.session.user_id,
    });

    res.status(200).json(newFitness);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
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
    console.error(err);
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