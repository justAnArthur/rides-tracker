import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')

sequelize.authenticate()