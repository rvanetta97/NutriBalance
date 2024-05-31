const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGoal= await Goal.create({ 
        ...req.body,
        user_id: req.session.user_id,
    });
    
    res.status(200).json(newGoal);
    } catch (err) {
    res.status(400).json(err);
    }
    });

    router.delete('/:id', async (req, res) => {
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
        res.status(500).json(err);
      }
    });

    router.get('/goal/:id', async (req, res) => {
      try {
        const goalData = await Fitness.findByPk(req.params.id, {
          include: [
            {
              model: Goal,
              attributes: [
                'id',
                'user_id',
                'activity_name',
                'duration',
                'calories_burned',
                'date',
                'met_level',
              ],
            },
          ],
        });
    
        const Fitness = fitnessData.get({ plain: true });
        res.render('goal', { Goal });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
    
    router.get('/goal/:id', async (req, res) => {
      try {
        const goalData = await Fitness.findByPk(req.params.id);
    
        const Goal = goalData.get({ plain: true });
    
        return res.render('goal', Goal [req.params.num - 1]);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
  

module.exports = router;