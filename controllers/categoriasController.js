const { Categoria } = require('../models');

const categoriasController = {
  index: async (request, response) => {
    const categoria = await Categoria.findAll();

    return response.status(200).json(categoria);
  },

  store: async (request, response) => {
    const { nome } = request.body;

    await Categoria.create({ nome });

    return response.status(201).json(nome);
  },
};

module.exports = categoriasController;
