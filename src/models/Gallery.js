export default (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    point: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    report_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reports',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    indexes: [
      {
        unique: false,
        fields: ['report_id']
      }
    ],
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  Gallery.associate = (models) => {
    Gallery.belongsTo(models.Report, {
      foreignKey: 'report_id',
    })
  }

  return Gallery
}
