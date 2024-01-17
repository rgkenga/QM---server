export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      role: {
        type: Sequelize.ENUM('User', 'Admin', 'SuperAdmin'),
        defaultValue: 'User',
        allowNull: false,
        values: ['User', 'Admin', 'SuperAdmin']
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      indexes: [
        {
          unique: false,
          fields: ['city_id']
        }
      ]
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  }
}
