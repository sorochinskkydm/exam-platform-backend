/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('demo_tests', 'item_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
      references: {
        model: 'items',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('demo_tests_questions', 'demo_test_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
      references: {
        model: 'demo_tests',
        key: 'id',
      },
    });

    await queryInterface.changeColumn(
      'demo_tests_questions_answers',
      'question_id',
      {
        type: Sequelize.STRING(36),
        allowNull: false,
        references: {
          model: 'demo_tests_questions',
          key: 'id',
        },
      },
    );

    await queryInterface.changeColumn('tasks', 'item_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
      references: {
        model: 'items',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('tasks_questions', 'task_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('tasks_answers', 'question_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
      references: {
        model: 'tasks_questions',
        key: 'id',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('demo_tests', 'item_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
    });

    await queryInterface.changeColumn('demo_tests_questions', 'demo_test_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
    });

    await queryInterface.changeColumn(
      'demo_tests_questions_answers',
      'question_id',
      {
        type: Sequelize.STRING(36),
        allowNull: false,
      },
    );

    await queryInterface.changeColumn('tasks', 'item_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
    });

    await queryInterface.changeColumn('tasks_questions', 'task_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
    });

    await queryInterface.changeColumn('tasks_answers', 'question_id', {
      type: Sequelize.STRING(36),
      allowNull: false,
    });
  },
};
