const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
try {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Database seeded successfully');
} catch (error) {
  console.error('Error seeding database:', error);
} finally {
  process.exit(0);
}
};

seedDatabase();