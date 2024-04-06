import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config.js";

class Match extends Model {}

Match.init(
  {
    team_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team_2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Define model options
    sequelize, // Pass the Sequelize instance
    modelName: "Match", // Set model name
    tableName: "Match" // Set table name (optional, Sequelize will use pluralized version of model name by default)
  }
);
Match.sync({ force: false });
// Export the Match model
export { Match };
