import { Dialect, Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("cookunity", "leandro", "asdfgh", {
  host: "localhost",
  dialect: "postgres" as Dialect,
  logging: false,
});

// export const Enterprises = enterpriseFactory(sequelizeConnection);

export default sequelizeConnection;
