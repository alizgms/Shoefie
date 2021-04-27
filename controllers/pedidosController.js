const { Pedido } = require('../models');
const { v4: uuid } = require('uuid');

const pedidosController = {
  index: async (request, response) => {
    const pedido = await Pedido.findAll();

    return response.status(200).json(pedido);
  },

  store: async (request, response) => {
    const { statusPedido, dataVencimento, usuarios_id } = request.body;

    const pedidos = {
      statusPedido,
      codigoBoleto: uuid(),
      dataVencimento,
      usuarios_id,
    };

    await Pedido.create(pedidos);
    return response.status(201).json(pedidos);
  },
};

module.exports = pedidosController;
