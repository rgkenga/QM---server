export default {
  development: {
    username: "postgres",
    password: "user",
    database: "jwt",
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    logging: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "user",
    database: "jwt",
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    logging: false
  }
}
