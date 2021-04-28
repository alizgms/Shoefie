const { sequelize, Cadastro } = require('./models');

Cadastro.findAll().then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
