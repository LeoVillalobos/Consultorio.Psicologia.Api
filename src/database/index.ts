// import { createPool, PoolOptions } from 'mysql2/promise';

// const DEFAULT_CONFIG: PoolOptions = {
//   host: '127.0.0.1',
//   user: 'root',
//   port: 3306,
//   password: '',
//   database: 'node_api'
// };

// const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

// export const connection = createPool(DEFAULT_CONFIG);
import { Pool, type PoolConfig } from 'pg';

const DEFAULT_CONFIG: PoolConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'api_node',
  password: 'Leonardo123',
  port: 5434,
};

// const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

export const connection = new Pool(DEFAULT_CONFIG);
