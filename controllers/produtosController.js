const { Produto } = require('../models');

const produtosController = {
  index: async (request, response) => {
    const produtos = await Produto.findAll();

    return response.json(produtos);
  },

  create: async (request, response) => {
    const { nome, preco } = request.body;

    const produto = await Produto.create({
      nome,
      preco,
    });

    return response.status(201).json(produto);
  },
};

module.exports = produtosController;
