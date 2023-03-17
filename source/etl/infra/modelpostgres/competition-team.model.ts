import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import sequelizeConnection from "../../../common/dbConnection";
import Competition from "./competition.model";
import Team from "./team.model";

class CompetitionTeam extends Model<
  InferAttributes<CompetitionTeam>,
  InferCreationAttributes<CompetitionTeam>
> {
  declare id: CreationOptional<number>;
  declare competitionID: ForeignKey<Competition["id"]>;
  declare teamID: ForeignKey<Team["id"]>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

CompetitionTeam.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    competitionID: {
      type: DataTypes.INTEGER,
      unique: "compositeIndex",
    },
    teamID: {
      type: DataTypes.INTEGER,
      unique: "compositeIndex",
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "competitionteam",
  }
);

export default CompetitionTeam;
