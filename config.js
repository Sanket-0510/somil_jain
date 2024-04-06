import { Sequelize, DataTypes, Model } from "sequelize";
const config =  {
    development: {
      username: 'somil_jain',
      password: 'somil_password',
      database: 'somil',
      host: 'localhost',
      dialect: 'postgres',
      port: 5432, // Default PostgreSQL port
      logging: true, // Set to true if you want to see SQL queries in the console
    },
    production: {
        username: 'somil_jain',
        password: 'somil_password',
        database: 'somil',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432, // Default PostgreSQL port
        logging: true, // Set to true if you want to see SQL queries in the console
    },
  };
  

const { username, password, database, host, dialect, port, logging } = config.development;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect, // Ensure that the dialect is explicitly specified
    port,
    logging
  });
export {sequelize}