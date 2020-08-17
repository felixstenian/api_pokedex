"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pokemon_data", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      abilities: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      base_experience: {
        type: Sequelize.INTEGER,
      },
      forms: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      game_indices: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      height: {
        type: Sequelize.INTEGER,
      },
      held_items: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      is_default: {
        type: Sequelize.BOOLEAN,
      },
      location_area_encounters: {
        type: Sequelize.STRING,
      },
      moves: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      name: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      species: {
        type: Sequelize.JSONB,
      },
      sprites: {
        type: Sequelize.JSONB,
      },
      stats: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      types: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("pokemon_data");
  },
};
