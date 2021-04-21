const { Carrinho } = require('../models');

const carrinhosController = {
  show: async (request, response) => {
    const { id } = request.params;

    const carrinhos = await Carrinho.findAll({
      where: {
        pedidos_id: id,
      },
    });

    console.log(carrinhos);

    return response.json(carrinhos);
  },

  create: async (request, response) => {
    const { qtdRequisitado, produtos_id, pedidos_id } = request.body;
    // const { id } = request.params;

    // console.log(pedidos_id);
    const carrinhos = await Carrinho.create({
      qtdRequisitado,
      produtos_id,
      pedidos_id,
    });

    return response.json(carrinhos);
  },
};

module.exports = carrinhosController;
