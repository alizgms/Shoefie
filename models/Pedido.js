module.exports = (sequelize,DataType) => {
    const Pedido = sequelize.define(
        "Pedido", {
            valor: DataType.DECIMAL,
            statusPedido: DataType.TINYINT,
            codigoBoleto: DataType.STRING,
            statusBoleto: DataType.TINYINT,
            dataVencimento: DataType.DATE
        }, {
            tableName: "pedidos",
            timestamp: false
        }
    );

    Pedido.associate = (models) => {
        //link com Clientes
        Pedido.belongsTo(models.Cliente,{as:"pedido", foreignKey:"clientes_id"});
        //produtos id
        Pedido.belongsToMany(models.Produto,{
            as:"carrinho",
            through:"carrinhos",
            foreignKey:"pedidos_id",
            otherKey:"produtos_id",
            timestamp: false
        });

    }

    return Pedido;

}