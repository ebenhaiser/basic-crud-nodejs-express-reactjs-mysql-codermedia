import { Sequelize } from "sequelize";

const db = new Sequelize("crud_node_react_express", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
