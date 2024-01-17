export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Galleries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      point: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      report_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Reports',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
          fields: ['report_id']
        }
      ]
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Galleries')
  }
}
