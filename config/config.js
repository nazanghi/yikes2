require('dotenv').config()
module.exports = {
  development: {
    database: "yikes2",
    dialect: "postgres"
  },
  test: {
    database: "yikes2_db",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
