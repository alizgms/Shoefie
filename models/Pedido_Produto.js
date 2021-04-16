model.exports = (sequelize,DataType) => {
    const Pedido_Produto = sequelize.define(
        'Pedido_Produto', {
            qtdProdutos: DataTypes.INTEGER
        }, {
            tableName: "pedidos_produtos",
            timestamp: false
        }
    );

    Pedido_Produto.associate = (models) => {

        Pedido_Produto.belongsTo(models.Pedido,{as:"qtdproduto"});
        Pedido_Produto.belongsTo(models.Produto,{as:"qtdproduto"});
    }
}