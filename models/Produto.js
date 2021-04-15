model.export = (sequelize,DataType) => {
    const Produto = sequelize.define(
        'Produto', {
            nome: DataType.STRING,
            preco: DataType.DECIMAL
        }, {
            tableName: "produtos",
            timestamp: false
        }
    );

    Produto.associate = (models) => {
        //pedido id
        Produto.belongsToMany(models.Produto,{
            as:"produto",
            through:"pedidos_produtos",
            foreignKey:"produtos_id",
            otherKey:"pedidos_id",
            timestamp: false
        })
    }

    return Produto;
}