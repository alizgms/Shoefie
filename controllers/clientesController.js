const { Cliente } = require('../models');

const clientesController = {
  index: async (request, response) => {
    const clientes = await Cliente.findAll();

    return response.json(clientes);
  },

  create: async (request, response) => {
    const { nome, email, senha, cpf, uf, cidade, endereco, cep } = request.body;

    const createCliente = await Cliente.create({
      nome,
      email,
      senha,
      cpf,
      uf,
      cidade,
      endereco,
      cep,
    });

    return response.status(201).json(createCliente);
  },
};

module.exports = clientesController;
