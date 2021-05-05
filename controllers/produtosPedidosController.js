const { ProdutoPedido } = require('../models');

const produtosPedidosController = {
  indexCarrinho: async (request, response) => {
    return response.render('carrinhoCompra');
  },

  index: async (request, response) => {
    const produtosPedidos = await ProdutoPedido.findAll();
    return response.json(produtosPedidos);
  },

  store: async (request, response) => {
    const { pedidos_id, qtdProduto } = request.body;
    const { id } = request.params;

    const produtoPedido = {
      produtos_id: parseInt(id),
      pedidos_id,
      qtdProduto,
    };

    console.log(produtoPedido);

    await ProdutoPedido.create(produtoPedido);

    return response.status(201).json(produtoPedido);
  },

  delete: async (request, response) => {
    const { id } = request.params;

    await ProdutoPedido.destroy({ where: { id } });

    return response.status(201).send();
  },
};

module.exports = produtosPedidosController;
