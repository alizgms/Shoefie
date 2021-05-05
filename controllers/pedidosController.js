const { Pedido, ProdutoPedido } = require('../models');

const pedidosController = {
  shippingDetail: async (request, response) => {
    const pedido = await Pedido.findAll();

    // return response.status(200).json(pedido);
    return response.render('acompanharPedido');
  },
  store: async (request, response) => {
    const { statusPedido, dataVencimento, usuarios_id } = request.body;
    // const { usuarios_id } = request.session.usuarioLogado;

    let codigoBoleto = Math.random() * 100000000;

    codigoBoleto = Math.round(codigoBoleto);

    const pedidos = {
      statusPedido,
      codigoBoleto,
      dataVencimento,
      usuarios_id,
    };

    await Pedido.create(pedidos);
    return response.status(201).json(pedidos);
  },
<<<<<<< HEAD
  // connect: async (request, response) => {
  //   const produtos = request.localStorage.getItem('carrinho');
  //   const pedido = await Pedido.findOne({where: {statusPedido: null}});


  //   for(let product of produtos){
  //     let produto = await ProdutoPedido.findOne({where: {nome: product.nome}}) 

  //     let produtopedido = {
  //       produtos_id = produto.id,
  //       pedidos_id = pedido.id,
  //       qtdProduto = produto.qtd
  //     }
  //     await ProdutoPedido.create(produtopedido);
  //   }

  //   return response.status(201);
  // }
=======

  checkout: (request, response) => {
    return response.render('finalizarPagamento');
  },
>>>>>>> 5c6599e4f05fe79c37af4556d0134d5d0a9271b7
};

module.exports = pedidosController;
