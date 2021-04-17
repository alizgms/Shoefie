const { Pagamento } = require('../models');
const { v4: uuidv4 } = require('uuid');

const pagamentoController = {
  index: async (request, response) => {
    const pagamento = await Pagamento.findAll();

    return response.json(pagamento);
  },

  create: async (request, response) => {
    const { statusBoleto } = request.body;

    const pagamento = await Pagamento.create({
      codigoBoleto: uuidv4(),
      statusBoleto,
      dataVencimento: new Date(),
      pedidos_id,
    });

    return response.status(201).json(pagamento);
  },
};

module.exports = pagamentoController;
