const { Pedido, Usuario } = require('../models');

const pedidosController = {
  shippingDetail: async (request, response) => {
    const pedido = await Pedido.findAll();

    // return response.status(200).json(pedido);
    return response.render('acompanharPedido');
  },
  store: async (request, response) => {
    const { statusPedido, dataVencimento, usuarios_id } = request.body;
    // const { usuarios_id } = request.session.usuarioLogado;

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

  checkout: async (request, response) => {
    const { id } = request.session.usuarioLogado;
    const pedido = await Pedido.findAll({ where: { usuarios_id: id } });

    // return response.json(pedido);

    return response.render('finalizarPagamento', { pedidos: pedido });
  },
};

module.exports = pedidosController;
