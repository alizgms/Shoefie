const { ItemPedido } = require('../models');

const itensPedidosController = {
  index: async (request, response) => {
    const itensPedidos = await ItemPedido.findAll();

    console.log(itensPedidos);

    return response.json(itensPedidos);
  },

  create: async (request, response) => {
    const { qtdRequisitado, produtos_id, pedidos_id } = request.body;
    // const { id } = request.params;

    // console.log(pedidos_id);
    const itensPedidos = await ItemPedido.create({
      qtdRequisitado,
      produtos_id,
      pedidos_id,
    });

    return response.json(itensPedidos);
  },
};

module.exports = itensPedidosController;
