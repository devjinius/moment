module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define(
    'Priority',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      charset: 'utf8'
    }
  );

  Priority.associate = models => {
    Priority.hasMany(models.Todo, {
      onDelete: 'SET NULL',
      foreignKey: 'id'
    });
  };

  return Priority;
};
