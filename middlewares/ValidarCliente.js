
const {Cliente} = require('../models')

module.exports = async (request, response, next) => {
  let { nome, email, senha } = request.body; 
  let cliente = await  Cliente.findAll({
    where: {nome, email, senha}
  }); 
    
  if (cliente.length) { 
    response.status(400).json({erro:"Email já cadastrado."})
    return;

  } else {
    if (!email) {
      return response.status(400).json({ erro:" insira um email valido"});

    } else if (senha.length < 6 || senha.length > 12) {
      return response.status(400).json({ erro: "Senha inválida "});
    } else if (nome.length < 0) {
      return response.status(400).json({ erro: "Nome inválido."});
    } else {
      next();
    }
  }

};