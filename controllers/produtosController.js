const { Produto } = require('../models');

const produtosController = {
  index: async (request, response) => {
    const produtos = await Produto.findAll();

    return response.status(200).json(produtos);
  },

  store: async (request, response) => {
    const { nome, preco, qtdEstoque } = request.body;

    const produto = {
      nome,
      preco,
      qtdEstoque,
    };

    await Produto.create(produto);

    return response.status(201).json(produto);
  },
};

module.exports = produtosController;
