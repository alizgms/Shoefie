const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
  const { nome, email, senha } = request.body;

  const usuario = await Usuario.findAll({
    where: { email },
  });

  if (usuario.email || email.length < 0 || !email) {
    return response
      .status(400)
      .json({ error: 'Email invalido ou já cadastrado' });
  } else if (!senha || senha.length < 6 || senha.length > 12) {
    return response.status(400).json({ erro: 'Senha inválida ' });
  } else if (!nome || nome.length < 2) {
    return response.status(400).json({ erro: 'Nome inválido.' });
  }
  return next();
};
