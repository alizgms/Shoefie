const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');

const usuariosController = {
  // Renderiza tela de cadastro do usuário
  signup: (request, response) => {
    return response.render('cadastro');
  },
  logoff: (request, response) => {
    request.session.destroy();

    return response.redirect('/');
  },
  // Renderiza perfil do usuário
  profile: (request, response) => {
    const userLogged = request.session.usuarioLogado;

    return response.render('telaUsuario', { usuarioLogado: userLogged });
  },

  // Renderiza tela de login
  login: (request, response) => {
    return response.render('login');
  },

  index: async (request, response) => {
    const usuarios = await Usuario.findAll();

    return response.status(200).send({ usuarios });
  },

  // Cadastra usuario
  store: async (request, response) => {
    const { nome, email, senha } = request.body;

    const usuario = {
      id: uuid(),
      nome,
      email,
      senha,
    };

    await Usuario.create(usuario);

    usuario.senha = undefined;

    return response.redirect('/categorias/produtos');
  },

  // Autentica login do usuario
  auth: async (request, response) => {
    const { email, senha, loginStatus } = request.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return response.render('login');
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

    request.session.usuarioLogado = usuario;
    return response.redirect('/categorias/produtos');
  },

  delete: async (request, response) => {
    const { id } = request.body;

    await Usuario.destroy({
      where: {
        id,
      },
    });

    request.session.destroy();
    return response.redirect('/');
  },
  edit: async (request, response) => {
    const usuario = request.session.usuarioLogado;
    const { id } = usuario;
    const { nome, email } = request.body;

    const usuarioAtualizado = await Usuario.update(
      {
        nome,
        email,
      },
      {
        where: { id },
      }
    );

    request.session.usuarioLogado.nome = nome;
    request.session.usuarioLogado.email = email;
    // request.session.usuarioLogado = usuarioAtualizado;
    return response.render('telaUsuario', { editarPerfil: usuarioAtualizado });
  },
};

module.exports = usuariosController;
