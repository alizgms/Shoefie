const { Cliente } = require('../models');

const clientsController = {
  index: async (request, response) => {
    const clientes = await Cliente.findAll();

    return response.json(clientes);
  },

  show: async (request, response) => {
    const { id } = request.params;

    const cliente = await Cliente.findByPk(id);

    return response.status(200).json(cliente);
  },

  create: async (request, response) => {
    const { nome, email, senha } = request.body;

    const cliente = await Cliente.create({
      nome,
      email,
      senha,
    });

    return response.status(201).json(cliente);
  },
};

module.exports = clientsController;
