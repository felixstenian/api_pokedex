import Sequelize, { Model } from "sequelize";

class PokemonData extends Model {
  static init(sequelize) {
    super.init(
      {
        abilities: Sequelize.ARRAY(Sequelize.JSONB),
        base_experience: Sequelize.INTEGER,
        forms: Sequelize.ARRAY(Sequelize.JSONB),
        game_indices: Sequelize.ARRAY(Sequelize.JSONB),
        height: Sequelize.INTEGER,
        held_items: Sequelize.ARRAY(Sequelize.JSONB),
        is_default: Sequelize.BOOLEAN,
        location_area_encounters: Sequelize.STRING,
        moves: Sequelize.ARRAY(Sequelize.JSONB),
        name: Sequelize.STRING,
        order: Sequelize.INTEGER,
        species: Sequelize.JSONB,
        sprites: Sequelize.JSONB,
        stats: Sequelize.ARRAY(Sequelize.JSONB),
        types: Sequelize.ARRAY(Sequelize.JSONB),
        weight: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default PokemonData;
