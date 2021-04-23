const { Categoria } = require('../models');

const categoriasController = {
  index: async (request, response) => {
    const categoria = await Categoria.findAll();

    return response.status(200).json(categoria);
  },

  create: async (request, response) => {
    const { nome } = request.body;

    const categoria = {
      nome,
    };

    return response.status(201).json(categoria);
  },
};

module.exports = categoriasController;
