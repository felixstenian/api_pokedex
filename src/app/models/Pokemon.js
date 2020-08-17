import Sequelize, { Model } from "sequelize";

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Pokemon;
