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
};

module.exports = pedidosController;
