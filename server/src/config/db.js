const mongoose = require('mongoose')

const USERNAME = 'artifact-rater'
const PASSWORD = 'ckPA433A1r0ctkDo'
const CLUSTER_NAME = 'cluster0.6g4gb'
const DB_NAME = 'Genshin'

const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_NAME}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const connectDB = async () => {
	try {
		await mongoose.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

module.exports = connectDB
