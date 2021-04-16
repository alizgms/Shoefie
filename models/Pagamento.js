model.exports = (sequelize,DataType) => {
    const Pagamento = sequelize.define(
        'Pagamento', {
            codigoBoleto: DataType.INTEGER,
            statusBoleto: DataType.INTEGER,
            dataVencimento: DataType.DATE
        }, {
            tableName: "pagamentos",
            timestamp: false
        }
    );

    Pagamento.associate = (models) => {
        //pedidos id
        Pagamento.hasOne(models.Pedido,{as:"pagamento", foreignKey:"pedidos_id"});
        //cliente id de pedidos
        Pagamento.hasOne(models.Pedido,{as:"clienteid", foreignKey:"pedidos_clientes_id"});
    }

    return Pagamento;

}