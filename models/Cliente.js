model.exports = (sequelize,DataType) => {
    const Cliente = sequelize.define(
        'Cliente', {
            nome: DataType.STRING,
            email: DataType.STRING,
            senha: DataType.STRING
        }, {
            tableName: "clientes",
            timestamp: false
        }
    );

    Cliente.associate = (models) => {
        //link com CadastroEnvios
        Cliente.hasMany(models.Endereco, {as:"endereco", foreignKey:"clientes_id"});
        //link com Pedidos
        Cliente.hasMany(models.Pedido, {as:"pedido", foreignKey:"clientes_id"});

    }

    return Cliente;

}