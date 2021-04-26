const { sequelize, Login } = require('./models');

Login.findAll().then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
