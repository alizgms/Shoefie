module.exports = (request, response, next) => {
  if (request.session.usuarioLogado != null) {
    return next();
  } else {
    return response.redirect('/usuarios/login');
  }
};
