const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
  const { nome, email, senha } = request.body;

  if (!email || email.length < 0) {
    return response.status(400).json({ error: 'Email invalido' });
  }

  const usuarioExiste = await Usuario.findAll({
    where: { nome, email, senha },
  });

  if (usuarioExiste.length) {
    return response.status(400).json({ erro: 'Email já registrado' });
  } else if (!senha || senha.length < 6 || senha.length > 12) {
    return response.status(400).json({ erro: 'Senha inválida ' });
  } else if (!nome || nome.length < 0) {
    return response.status(400).json({ erro: 'Nome inválido.' });
  }
  return next();
};
