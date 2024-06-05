const { User } = require('../models');

const userData = [
  {
    "first_name": "Sal",
    "last_name": "Thomas",
    "email": "sal@hotmail.com",
    "password": "password12345",
    "age": 25,
    "weight": 212
  },
  {
    "first_name": "Ted",
    "last_name": "Baker",
    "email": "sal@gmail.com",
    "password": "password12445",
    "age": 27,
    "weight": 242
  },
  {
    "first_name": "Ned",
    "last_name": "Taylor",
    "email": "ttaylor@hotmail.com",
    "password": "password1234",
    "age": 34,
    "weight": 192
  },
  {
    "first_name": "Fred",
    "last_name": "Sams",
    "email": "sams@hotmail.com",
    "password": "password2345",
    "age": 45,
    "weight": 332
  },
  {
    "first_name": "Ned",
    "last_name": "Saint",
    "email": "saint@hotmail.com",
    "password": "password1234445",
    "age": 35,
    "weight": 248
  },
  {
    "first_name": "Rachel",
    "last_name": "Thomas",
    "email": "rthomas@hotmail.com",
    "password": "password12345",
    "age": 32,
    "weight": 196
  }
];

const userSeeds = async () => {
  // Hash the passwords before seeding
  for (let user of userData) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  await User.bulkCreate(userData, {
    individualHooks: true // Ensures hooks are called for each instance
  });
};

module.exports = userSeeds;