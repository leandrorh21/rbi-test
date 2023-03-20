import { Dialect, Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

const sequelizeConnection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT as number | undefined,
    dialect: "postgres" as Dialect,
    logging: true,
  }
);

export default sequelizeConnection;
