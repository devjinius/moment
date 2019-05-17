module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true
      },
      checked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      charset: 'utf8'
    }
  );

  Todo.associate = models => {};

  return Todo;
};
