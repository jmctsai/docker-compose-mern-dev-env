const express = require('express')

const getRating = require('../controller/rating')

const router = express.Router()

router.get('/', getRating)

module.exports = router
