module.exports = (sequelize,DataType) => {
    const Produto = sequelize.define(
        'Produto', {
            nome: DataType.STRING,
            preco: DataType.DECIMAL,
            qtdEstoque: DataType.INTEGER
        }, {
            tableName: "produtos",
            timestamp: false
        }
    );

    Produto.associate = (models) => {
        //pedido id
        Produto.belongsToMany(models.Pedido,{
            as:"carrinho",
            through:"carrinhos",
            foreignKey:"produtos_id",
            otherKey:"pedidos_id",
            timestamp: false
        });

    }

    return Produto;
    
}