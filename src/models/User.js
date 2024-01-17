export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cities',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    role: {
      type: DataTypes.ENUM('User', 'Admin', 'SuperAdmin'),
      defaultValue: 'User',
      allowNull: false,
      values: ['User', 'Admin', 'SuperAdmin']
    }
  }, {
    indexes: [
      {
        unique: false,
        fields: ['city_id']
      }
    ],
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  User.associate = (models) => {
    User.belongsTo(models.City, {
      foreignKey: 'city_id'
    })

    User.hasMany(models.Report, {
      foreignKey: 'user_id',
      as: 'user_reports',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return User
}