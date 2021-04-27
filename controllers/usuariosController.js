const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');

const usuariosController = {
  index: async (request, response) => {
    const usuario = await Usuario.findAll();

    return response.status(200).json(usuario);
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

    usuario.senha = undefined;

    return response.status(201).json(usuario);
  },
  login: async (request, response) => {
    const { email, senha, loginStatus } = request.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      return response
        .status(400)
        .json({ status: 0, message: 'E-email ou senha incorretos!' });
    }

    const usuario_id = usuario.id;

    await Usuario.update(
      {
        loginStatus,
      },
      {
        where: {
          id: usuario_id,
        },
      }
    );

    usuario.senha = undefined;

    return response.status(200).json({
      status: 1,
      message: 'Usuário logado com sucesso!',
      usuario,
    });
  },
};

module.exports = usuariosController;