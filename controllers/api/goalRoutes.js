const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.create({ 
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const goalData = await Goal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!goalData) {
      res.status(404).json({ message: 'No goals found with this id!' });
      return;
    }

    res.status(200).json(goalData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/goal/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      attributes: [
        'id',
        'user_id',
        'goal_name',
        'target',
        'progress',
        'start_date',
        'end_date',
      ],
    });

    if (!goalData) {
      res.status(404).json({ message: 'No goals found with this id!' });
      return;
    }

    const goal = goalData.get({ plain: true });
    res.render('goal', { goal });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;