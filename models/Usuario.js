const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      nome: DataType.STRING,
      email: DataType.STRING,
      senha: DataType.STRING,
      loginStatus: DataType.BOOLEAN,
    },
    {
      tableName: 'usuarios',
      timestamps: false,
    }
  );

  Usuario.addHook('beforeCreate', (usuario) => {
    const salt = bcrypt.genSaltSync();
    usuario.senha = bcrypt.hashSync(usuario.senha, salt);
  });

  Usuario.associate = (models) => {
    //1:n com pedido enviando fk
    Usuario.hasMany(models.Pedido, { as: 'pedido', foreignKey: 'usuarios_id' });
    //1:1 com cadastro enviando fk
    Usuario.hasOne(models.Cadastro, {
      as: 'cadastro',
      foreignKey: 'usuarios_id',
    });
  };

  return Usuario;
};
