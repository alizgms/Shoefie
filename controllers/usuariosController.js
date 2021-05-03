const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');
const { response } = require('express');

const usuariosController = {
  index: async (request, response) => {
    const usuarios = await Usuario.findAll();

    return response.status(200).send({ usuarios });
  },
  signup: (request, response) => {
    return response.render('cadastro');
  },
  profile: (request, response) => {
    return response.render('telaUsuario');
  },
  store: async (request, response) => {
    const { nome, email, senha } = request.body;

    const usuario = {
      id: uuid(),
      nome,
      email,
      senha,
    };

    await Usuario.create(usuario);

    // return response.redirect('/produtos');
    return response.status(201).send({
      usuario,
    });
  },
  login: (request, response) => {
    return response.render('login');
  },

  auth: async (request, response) => {
    const { email, senha, loginStatus } = request.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return response
        .status(400)
        .json({ status: 0, message: 'E-email ou senha incorretos!' });
    }

    const usuario_id = usuario.id;

    await Usuario.update(
      {
        loginStatus: 1,
      },
      {
        where: {
          id: usuario_id,
        },
      }
    );

    // console.log(token);

    request.session.usuarioLogado = usuario;
    return response.render('produtos');
    // return response.status(200).send({
    //   status: 1,
    //   message: 'Usuário logado com sucesso!',
    //   usuario,
    // });
  },
  delete: async (request, response) => {
    const { id } = request.params;

    await Usuario.destroy({
      where: {
        id,
      },
    });
    return response.status(201).send();
  },
};

module.exports = usuariosController;
