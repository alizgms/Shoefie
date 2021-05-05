const { Pedido } = require('../models');

const pedidosController = {
  shippingDetail: async (request, response) => {
    const pedido = await Pedido.findAll();

    // return response.status(200).json(pedido);
    return response.render('acompanharPedido');
  },
  store: async (request, response) => {
    const { statusPedido, dataVencimento, usuarios_id } = request.body;

    let codigoBoleto = Math.random() * 100000000;

    codigoBoleto = Math.round(codigoBoleto);

    const pedidos = {
      statusPedido,
      codigoBoleto,
      dataVencimento,
      usuarios_id,
    };

    await Pedido.create(pedidos);
    return response.status(201).json(pedidos);
  },

  checkout: (request, response) => {
    return response.render('finalizarPagamento');
  },
};

module.exports = pedidosController;
