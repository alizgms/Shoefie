const { Login } = require('../models');

module.exports = async (request, response, next) => {
  const { nome, email, senha } = request.body;

  if (!email || email.length < 0) {
    return response.status(400).json({ error: 'Invalid email' });
  }

  const loginExists = await Login.findAll({
    attributes: { exclude: ['login_id'] },
    where: { nome, email, senha },
  });

  if (loginExists.length) {
    return response.status(400).json({ erro: 'Email já cadastrado.' });
  } else if (!senha || senha.length < 6 || senha.length > 12) {
    return response.status(400).json({ erro: 'Senha inválida ' });
  } else if (!nome || nome.length < 0) {
    return response.status(400).json({ erro: 'Nome inválido.' });
  }

  return next();
};
