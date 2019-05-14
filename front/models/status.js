module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      charset: 'utf8'
    }
  );

  Status.associate = models => {
    Status.belongsTo(models.Todo, {
      foreignKey: 'id'
    });
  };
  return Status;
};
