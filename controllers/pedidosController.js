const { Pedido } = require('../models');

const pedidosController = {
  index: async (request, response) => {
    // const { id } = request.params;

    const pedido = await Pedido.findAll({
      attributes: { exclude: ['produtos_id', 'login_id'] },
    });

    return response.status(200).json(pedido);
  },

  // show: async (request, response) => {
  //   const { id } = request.params;

  //   const pedido = await Pedido.findAll({
  //     where: {
  //       id,
  //     },
  //   });

  //   return response.status(200).json(pedido);
  // },

  create: async (request, response) => {
    const { statusPedido, login_id } = request.body;

    const createPedido = await Pedido.create({
      statusPedido,
      login_id,
    });

    response.status(201).json(createPedido);
  },
};

module.exports = pedidosController;
