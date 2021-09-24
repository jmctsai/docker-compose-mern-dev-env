const express = require('express')
const connectDB = require('./config/db')

const rateRoute = require('./routes/rating')

const app = express()
const PORT = process.env.PORT || 5000

//Express middleware
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

//Router
app.get('/', rateRoute)

//MongoDB connection
connectDB()
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Server running on port: http://localhost:${PORT}`)
		})
	)
	.catch((error) => console.log(error.message))
