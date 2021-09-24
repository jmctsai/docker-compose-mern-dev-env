const mongoose = require('mongoose')

const artifactSchema = new mongoose.Schema({
	//to add
})

const Artifact = mongoose.model('Artifact', artifactSchema)

module.exports = Artifact
