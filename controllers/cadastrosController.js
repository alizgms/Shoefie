const { Cadastro } = require('../models');

const cadastrosController = {
  index: async (request, response) => {
    const cadastro = await Cadastro.findAll();

    return response.json(cadastro);
  },
  store: async (request, response) => {
    const { nome, cpf, cep, uf, cidade, endereco } = request.body;

    const { id } = request.session.usuarioLogado;
    console.log();

    const cadastro = {
      nome,
      cpf,
      cep,
      uf,
      cidade,
      endereco,
      usuarios_id: id,
    };

    await Cadastro.create(cadastro);

    return response.status(201).json(cadastro);
  },
  cadastroEndereco: (request, response) => {
    return response.render('confirmacaoEntrega');
  },
};

module.exports = cadastrosController;
