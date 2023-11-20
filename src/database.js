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

const Type = sequelize.define("type", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: DataTypes.STRING,
})

Type.belongsTo(User)
User.hasMany(Type)

const RideKm = sequelize.define("ride_km", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	value: DataTypes.INTEGER,
})


RideKm.belongsTo(Type)
Type.hasMany(RideKm)
RideKm.belongsTo(User)
User.hasMany(RideKm)

const RideTime = sequelize.define("ride_time", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	value: DataTypes.INTEGER,
})

RideTime.belongsTo(Type)
Type.hasMany(RideTime)
RideTime.belongsTo(User)
User.hasMany(RideTime)

const RideUsage = sequelize.define("ride_usage", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	value: DataTypes.INTEGER,
})

RideUsage.belongsTo(Type)
Type.hasMany(RideUsage)
RideUsage.belongsTo(User)
User.hasMany(RideUsage)

await sequelize.sync()

export { User, Type, RideKm, RideTime, RideUsage }
