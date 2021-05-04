const { ProdutoPedido, Produto } = require('../models');

const produtosPedidosController = {
  indexCarrinho: async (request, response) => {
    // const { id } = request.params;

    // const produtosPedidos = await ProdutoPedido.findAll({
    //   where: { pedidos_id: id },
    //   include: { model: Produto, as: 'produtos' },
    // });

    // let produtos = localStorage.getItem('carrinho');
    // console.log(produtos);

    return response.render('carrinhoCompra', {
      // listProducts: produtosPedidos,
    });

    // return response.json(produtosPedidos);
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
