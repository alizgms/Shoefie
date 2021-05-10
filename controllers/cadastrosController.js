const { log } = require('debug');
const { stringify } = require('uuid');
const { Cadastro } = require('../models');

const cadastrosController = {
  index: async (request, response) => {
    const cadastro = await Cadastro.findAll();

    return response.json(cadastro);
  },
  store: async (request, response) => {
    const { nome, cpf, cep, uf, cidade, endereco, telefone } = request.body;
    const { id } = request.session.usuarioLogado;

    const cadastroExistente = await Cadastro.findAll({ where: { cpf } });

    const cadastro = {
      nome,
      cpf,
      cep,
      uf,
      cidade,
      endereco,
      telefone,
      usuarios_id: id,
    };

    if (Object.entries(cadastroExistente).length === 0) {
      await Cadastro.create(cadastro);
      return response.redirect('/pedidos/checkout');
    }

    return response.redirect('/pedidos/checkout');
  },
  cadastroEndereco: async (request, response) => {
    const userlogged = request.session.usuarioLogado;

    const registeredUser = await Cadastro.findAll({
      where: { usuarios_id: userlogged.id },
    });

    console.log(JSON.stringify(registeredUser));

    return response.render('confirmacaoEntrega', {
      dados: userlogged,
      information: registeredUser,
    });
  },
};

module.exports = cadastrosController;
