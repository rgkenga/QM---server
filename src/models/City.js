export default (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  City.associate = (models) => {
    City.hasMany(models.User, {
      foreignKey: 'city_id',
      as: 'city_users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return City
}
