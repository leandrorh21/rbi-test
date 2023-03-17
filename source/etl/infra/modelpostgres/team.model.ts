import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import sequelizeConnection from "../../../common/dbConnection";

class Team extends Model<InferAttributes<Team>, InferCreationAttributes<Team>> {
  declare id: CreationOptional<number>;
  declare name: String;
  declare tla: String;
  declare shortName: String;
  declare areaName: String;
  declare address: String;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Team.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    tla: {
      type: DataTypes.STRING,
    },
    shortName: {
      type: DataTypes.STRING,
    },
    areaName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "team",
  }
);

export default Team;
