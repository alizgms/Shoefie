const { Pedido } = require('../models');

const pedidosController = {
  show: async (request, response) => {
    const { id } = request.params;

    const pedido = await Pedido.findByPk({
      where: {
        pedidos_id: id,
      },
    });

    return response.status(200).json(pedido);
  },

  create: async (request, response) => {
    const { valor, statusPedido } = request.body;

    const createPedido = {
      valor,
      statusPedido,
    };

    response.status(201).json(createPedido);
  },
};

module.exports = pedidosController;
