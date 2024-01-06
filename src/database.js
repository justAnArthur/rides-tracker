import { DataTypes, Model, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'

<<<<<<< HEAD
const sequelize = new Sequelize('vavjs/react-rides-tracker', 'postgres', '', {
	host: 'db',
	port: 5432,
	dialect: 'postgres',
})
=======
const sequelize = new Sequelize('postgresql://localhost:5432/vavjs/react-rides-tracker')
>>>>>>> 16da994 (- files)

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
		/*validate: {
			isEmail: true,
		}*/
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
	admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
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
<<<<<<< HEAD
}, {
	defaultScope: {
		attributes: {
			exclude: ['userId']
		}
	}
=======
>>>>>>> 16da994 (- files)
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
<<<<<<< HEAD
}, {
	defaultScope: {
		attributes: {
			exclude: ['userId']
		}
	}
=======
>>>>>>> 16da994 (- files)
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
<<<<<<< HEAD
}, {
	defaultScope: {
		attributes: {
			exclude: ['userId']
		}
	}
=======
>>>>>>> 16da994 (- files)
})

RideUsage.belongsTo(Type)
Type.hasMany(RideUsage)
RideUsage.belongsTo(User)
User.hasMany(RideUsage)

const Advertisement = sequelize.define("advertisement", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: DataTypes.STRING,
	link: {
		type: DataTypes.STRING,
		validate: {
			isUrl: true,
		}
	},
	image: {
		type: DataTypes.STRING,
		validate: {
			isUrl: true,
		}
	},
<<<<<<< HEAD
	counter: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
})

await sequelize.sync({ force: true })
=======
})

await sequelize.sync()
>>>>>>> 16da994 (- files)

// creating admin
await User.findOrCreate({
	where: { email: 'admin' },
	defaults: {
		email: 'admin',
		name: 'admin',
		password: 'admin',
		admin: true,
	}
})

export { User, Type, RideKm, RideTime, RideUsage, Advertisement, sequelize }
