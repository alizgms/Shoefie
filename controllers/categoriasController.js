const { Categoria, Produto } = require('../models');

const categoriasController = {
  index: async (request, response) => {
    const categoria = await Categoria.findAll({
      include: { model: Produto, as: 'produtos' },
    });
<<<<<<< HEAD
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
   const {id}= request.session.usuarioLogado
    return response.render('produtos', { listProducts: categoria,idusuarios:id });
=======

    const { id } = request.session.usuarioLogado;

    return response.render('produtos', {
      listProducts: categoria,
      idusuarios: id,
    });
>>>>>>> 5eb6dde23b195bce7d6889dc9b3e24dcd5605021
  },

  store: async (request, response) => {
    const { nome } = request.body;

    await Categoria.create({ nome });

    return response.status(201).json(nome);
  },
};

module.exports = categoriasController;
