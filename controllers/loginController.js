const { Login } = require('../models');

const loginController = {
  index: async (request, response) => {
    const login = await Login.findAll();

    return response.json(login);
  },

  store: async (request, response) => {
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
