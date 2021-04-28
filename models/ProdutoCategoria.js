module.exports = (sequelize, DataType) => {
    const ProdutoCategoria = sequelize.define(
        'ProdutoCategoria',
        {
            categorias_id: {
                type: DataType.INTEGER,
                foreignKey: true,
                primaryKey: true,
            },
            produtos_id: {
                type: DataType.INTEGER,
                foreignKey: true,
                primaryKey: true,
            },
        },
        {
            tableName: 'categorias_produtos',
            timestamps: false,
        }
    );

    ProdutoCategoria.associate = (models) => {
        ProdutoCategoria.belongsTo(models.Categoria, {
            as: 'categorias',
            foreignKey: 'categorias_id',
        });

        ProdutoCategoria.belongsTo(models.Produto, {
            as: 'produtos',
            foreignKey: 'produtos_id',
        });
    };

    return ProdutoCategoria;

};