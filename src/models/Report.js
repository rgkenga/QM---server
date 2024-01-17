export default (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    points: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('Bad', 'Middle', 'Good'),
      allowNull: false,
      values: ['Bad', 'Middle', 'Good']
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    сheck: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    indexes: [
      {
        unique: false,
        fields: ['user_id']
      }
    ],
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  Report.associate = (models) => {
    Report.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'report_users'
    })

    Report.hasMany(models.Gallery, {
      foreignKey: 'report_id',
      as: 'report_galleries',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Report
}
