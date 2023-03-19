import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ForeignKey,
  NonAttribute,
} from "sequelize";

import sequelizeConnection from "../../../common/dbConnection";
import Team from "./team.model";

class Player extends Model<
  InferAttributes<Player>,
  InferCreationAttributes<Player>
> {
  declare id: CreationOptional<number>;
  declare name: String;
  declare position: CreationOptional<String>;
  declare dateOfBirth: String;
  declare nationality: String;

  declare teamID: ForeignKey<Team["id"]>;
  declare Team: NonAttribute<Team>;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Player.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      unique: "compositeIndex",
    },
    position: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
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
    tableName: "player",
  }
);

Player.belongsTo(Team, {
  foreignKey: "teamID",
  as: "Team",
});

Team.hasMany(Player, {
  foreignKey: "teamID",
  as: "Players",
});

export default Player;
