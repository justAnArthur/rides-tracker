import { DataTypes, Model, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'

const sequelize = new Sequelize('postgresql://localhost:5432/vavjs/react-rides-tracker')

class User extends Model {
	validPassword(password) {
		return bcrypt.compareSync(password, this.password);
	}
}

User.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		}
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		set(value) {
			const hash = bcrypt.hashSync(value, 10)
			this.setDataValue('password', hash)
		},
		allowNull: false,
	},
	age: DataTypes.INTEGER,
}, { sequelize, modelName: 'user' })

await sequelize.sync()

export { User }
