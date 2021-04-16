const { CadastroEnvio } = require('../models');

const cadastroEnvioController = {
  index: async (request, response) => {
    const cadastro = await CadastroEnvio.findAll();

    return response.json(cadastro);
  },

  show: async (request, response) => {
    const { id } = request.params;

    const cadastro = await CadastroEnvio.findByPk(id);

    return response.status(200).json(cadastro);
  },

  create: async (request, response) => {
    const {
      nome,
      endereco,
      cpf,
      cep,
      estado,
      cidade,
      clientes_id,
    } = request.body;

    const cadastro = await CadastroEnvio.create({
      nome,
      endereco,
      cpf,
      cep,
      estado,
      cidade,
      clientes_id,
    });

    return response.status(201).json(cadastro);
  },
};

module.exports = cadastroEnvioController;
