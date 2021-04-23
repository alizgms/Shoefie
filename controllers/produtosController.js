const { Produto } = require('../models');

const produtosController = {
  index: async (request, response) => {
    const produtos = await Produto.findAll();

    return response.json(produtos);
  },

  create: async (request, response) => {
    const { nome, preco, qtdEstoque } = request.body;

    const produtos = await Produto.create({
      nome,
      preco,
      qtdEstoque,
    });

    return response.status(201).json(produtos);
  },
};

module.exports = produtosController;
