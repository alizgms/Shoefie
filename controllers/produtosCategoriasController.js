const { ProdutoCategoria } = require('../models');

const produtoCategoria = {
  index: async (request, response) => {
    const produtosCategorias = await ProdutoCategoria.findAll();

    return response.status(200).json(produtosCategorias);
  },
  store: async (request, response) => {
    const { produtos_id, categorias_id } = request.body;

    const produtosCategorias = {
      produtos_id,
      categorias_id,
    };

    await ProdutoCategoria.create(produtosCategorias);

    return response.status(201).json(produtosCategorias);
  },
};

module.exports = produtoCategoria;
