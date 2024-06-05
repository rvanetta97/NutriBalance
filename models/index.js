const Nutrition = require('./Nutrition');
const Fitness = require('./Fitness');
const User = require('./User');

Nutrition.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

User.hasMany(Nutrition, { foreignKey: 'Nutrition_id' })

Fitness.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

User.hasMany(Fitness, { foreignKey: 'user_id' })

module.exports = {
    Nutrition,
    Fitness,
    User,
}