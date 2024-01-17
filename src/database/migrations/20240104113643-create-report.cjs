export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('Bad', 'Good'),
        allowNull: false,
        values: ['Bad', 'Good']
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      сheck: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
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
          fields: ['user_id']
        }
      ]
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reports')
  }
}
