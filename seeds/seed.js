const sequelize = require('../config/connection');
const { User, pics } = require('../models');


const userData = require('./userData.json');
const picsData = require('./picsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 await pics.bulkCreate(picsData);

  process.exit(0);
};

seedDatabase();