const Meal = require('./Meal');
const Activity = require('./Activity');
const User = require('./User');

Meal.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

User.hasMany(Meal, { foreignKey: 'meal_id' })

Activity.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' })

User.hasMany(Activity, { foreignKey: 'user_is' })

module.exports = {
    Meal,
    Activity,
    User,
}