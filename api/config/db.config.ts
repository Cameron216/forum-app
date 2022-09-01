import mysql from 'mysql2';

const dbConfig = {
  host: 'forum-app.cgnuhmnigbpn.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'passworddev1',
  database: 'forum-app',
};

export const connection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

