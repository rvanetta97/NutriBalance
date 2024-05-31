const Nutrition = require('./Nutrition');
const Fitness = require('./Fitness');
const User = require('./User');

Nutrition.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

<<<<<<< HEAD
User.hasMany(Nutrition, { foreignKey: 'meal_id' })
=======
User.hasMany(Nutrition, { foreignKey: 'Nutrition_id' })
>>>>>>> 434f6a25bcbb61b00684619dd98fc851bfb8bb50

Fitness.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

User.hasMany(Fitness, { foreignKey: 'user_is' })

module.exports = {
    Nutrition,
    Fitness,
    User,
}