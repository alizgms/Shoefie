const { Pedido, Usuario } = require('../models');

const pedidosController = {
  shippingDetail: async (request, response) => {
    const usuario = request.session.usuarioLogado;
    const usuarios_id = usuario.id;
    const pedidos = await Pedido.findAll({where:{usuarios_id}});
    // return response.status(200).json(pedido);
    return response.render('acompanharPedido',{listarPedidos: pedidos});
  },
  store: async (request, response) => {
    const { statusPedido, dataVencimento, usuarios_id, valor } = request.body;
    // const { usuarios_id } = request.session.usuarioLogado;

    let codigoBoleto = Math.random() * 100000000;

    codigoBoleto = Math.round(codigoBoleto);

    const pedido = {
      statusPedido,
      codigoBoleto,
      dataVencimento,
      usuarios_id,
      valor
    };

    const criado = await Pedido.create(pedido);

    return response.json(criado.id);
  },

  checkout: async (request, response) => {
    const { id } = request.session.usuarioLogado;
    const pedidos = await Pedido.findAll({ where: { usuarios_id: id } });

    // return response.json(pedido);

    return response.render('finalizarPagamento', { pedidos });
  },
};

module.exports = pedidosController;
