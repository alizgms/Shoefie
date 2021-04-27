const { Cadastro } = require('../models');

const cadastrosController = {
  index: async (request, response) => {
    const cadastro = await Cadastro.findAll();

    return response.status(200).json(cadastro);
  },

  store: async (request, response) => {
    const { nome, cpf, cep, uf, cidade, endereco, usuarios_id } = request.body;

    const cadastro = {
      nome,
      cpf,
      cep,
      uf,
      cidade,
      endereco,
      usuarios_id,
    };

    await Cadastro.create(cadastro);

    return response.status(201).json(cadastro);
  },
};

module.exports = cadastrosController;