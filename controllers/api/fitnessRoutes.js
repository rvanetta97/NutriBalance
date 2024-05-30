const router = require('express').Router();
const { Fitness } = require('../../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFitness= await Fitness.create({ 
        id: req.params.id,
        user_id: req.session.user_id,
    });
    
    res.status(200).json(newFitness);
    } catch (err) {
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
          include: [
            {
              model: Fitness,
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
        res.render('fitness', { Fitness });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
    
    router.get('/fitness/:id', async (req, res) => {
      try {
        const fitnessData = await Fitness.findByPk(req.params.id);
    
        const Fitness = fitnessData.get({ plain: true });
    
        return res.render('fitness', Fitness [req.params.num - 1]);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
  

module.exports = router;