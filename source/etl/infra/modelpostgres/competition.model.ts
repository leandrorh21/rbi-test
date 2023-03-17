import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  UpsertOptions,
} from "sequelize";

import sequelizeConnection from "../../../common/dbConnection";

class Competition extends Model<
  InferAttributes<Competition>,
  InferCreationAttributes<Competition>
> {
  declare id: CreationOptional<number>;
  declare name: String;
  declare code: String;
  declare areaName: String;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Competition.init(
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
    code: {
      type: DataTypes.STRING,
    },
    areaName: {
      type: DataTypes.STRING,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "competition",
  }
);

export default Competition;
