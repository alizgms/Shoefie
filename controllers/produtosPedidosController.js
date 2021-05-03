const { ProdutoPedido } = require('../models');

const produtosPedidosController = {
  index: async (request, response) => {
    const produtosPedidos = await ProdutoPedido.findAll();

    return response.status(200).json(produtosPedidos);
  },
  carrinho: (request, response) => {
    return response.render('carrinhoCompra');
  },
  store: async (request, response) => {
    const {  pedidos_id, qtdProduto } = request.body;
    const {id} = request.params;

    const produtoPedido = {
      produtos_id: id,
      pedidos_id,
      qtdProduto,
    };

    await ProdutoPedido.create(produtoPedido);

    return response.status(201).json(produtoPedido);
  },
};

module.exports = produtosPedidosController;
