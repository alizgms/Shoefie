const { Produto, ProdutoCategoria } = require('../models');

const produtosController = {
  index: async (request, response) => {
    const produtos = await Produto.findAll();

    return response.json(produtos);
  },
  store: async (request, response) => {
    const { nome, preco, qtdEstoque, imagem } = request.body;

    const produto = {
      nome,
      preco,
      qtdEstoque,
      imagem,
    };

    await Produto.create(produto);

    return response.status(201).json(produto);
  },
  delete: async (request, response) => {
    const { id } = request.params;

    const deleteProduto = await Produto.findOne({ where: { id } });

    console.log(deleteProduto);

    if (!deleteProduto) {
      return response.status(400).json({ error: 'Produto não encontrado' });
    }

    await Produto.destroy({ where: { id } });

    return response.status(201).send();
  },
};

module.exports = produtosController;
