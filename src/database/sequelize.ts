import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'Leonardo123',
  database: 'api_node',
});

export default sequelize;
