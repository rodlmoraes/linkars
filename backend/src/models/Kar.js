const mongoose = require('mongoose')

const KarSchema = new mongoose.Schema({
  vehicle: String,
  brand: String,
  year: Number,
  description: String,
}, { timestamps: true })

module.exports = mongoose.model('Kar', KarSchema)
