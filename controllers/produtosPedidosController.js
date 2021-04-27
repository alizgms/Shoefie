const { ProdutoPedido } = require('../models');

const produtosPedidosController = {
  index: async (request, response) => {
    const produtosPedidos = await ProdutoPedido.findAll();

    return response.status(200).json(produtosPedidos);
  },
  store: async (request, response) => {
    const { produtos_id, pedidos_id, qtdProduto } = request.body;

    const produtoPedido = {
      produtos_id,
      pedidos_id,
      qtdProduto,
    };

    await ProdutoPedido.create(produtoPedido);

    return response.status(201).json(produtoPedido);
  },
};

module.exports = produtosPedidosController;
