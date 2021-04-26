const { sequelize, ProdutoPedido } = require('./models');

ProdutoPedido.findAll().then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
