const { Usuario } = require('../models');

const usuarioController = {
  index: async (request, response) => {
    const usuario = await Usuario.findAll();

    return response.json(usuario);
  },

  store: async (request, response) => {
    const { nome, email, senha } = request.body;

    const usuario = await Usuario.create({
      nome,
      email,
      senha,
    });

    return response.status(201).json(usuario);
  },
};

module.exports = usuarioController;
