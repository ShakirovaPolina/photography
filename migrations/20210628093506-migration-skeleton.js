'use strict';
//public async changeColumn(tableName: string, attributeName: string, dataTypeOrOptions: object, options: object): *
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('TopicPhoto', 'TopicId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Topics',
        key: 'id'
      },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('TopicPhoto', 'TopicId');
  }
};
// ALTER TABLE tbl_name
//     ADD [CONSTRAINT [symbol]] FOREIGN KEY
//     [index_name] (col_name, ...)
//     REFERENCES tbl_name (col_name,...)
//     [ON DELETE reference_option]
//     [ON UPDATE reference_option]

// FOREIGN KEY (product_category, product_id)
//       REFERENCES product(category, id)
//       ON UPDATE CASCADE ON DELETE RESTRICT,
