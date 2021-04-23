const { Cadastro } = require('../models');

const cadastrosController = {
  index: async (request, response) => {
    const cadastros = await Cadastro.findAll();

    return response.json(cadastros);
  },

  create: async (request, response) => {
    const { nome, cpf, cep, uf, cidade, endereco, login_id } = request.body;

    const cadastro = await Cadastro.create({
      nome,
      cpf,
      cep,
      uf,
      cidade,
      endereco,
      login_id,
    });

    return response.json(cadastro);
  },
};

module.exports = cadastrosController;
