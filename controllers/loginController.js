const { Login } = require('../models');

const loginController = {
  index: async (request, response) => {
    const login = await Login.findAll({
      attributes: { exclude: ['login_id'] },
    });

    return response.json(login);
  },

  create: async (request, response) => {
    const { nome, email, senha } = request.body;

    const login = await Login.create({
      nome,
      email,
      senha,
    });

    return response.status(201).json(login);
  },
};

module.exports = loginController;
