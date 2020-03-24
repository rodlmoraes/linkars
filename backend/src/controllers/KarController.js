const Kar = require('../models/Kar')

module.exports = {
  async index(req, res) {
    const kars = await Kar.find()

    return res.json(kars)
  },

  async show(req, res) {
    const { id } = req.params

    Kar.findById(id, (err, kar) => {
      if (err || !kar) return res.status(404).send(err)

      return res.json(kar)
    })
  },

  async store(req, res) {
    const { vehicle, brand, year, description } = req.body

    kar = await Kar.create({
      vehicle,
      brand,
      year,
      description
    })

    return res.json(kar)
  },

  async update(req, res) {
    const { id } = req.params
    const { vehicle, brand, year, description } = req.body

    const newKar = {
      vehicle,
      brand,
      year,
      description
    }

    Kar.findByIdAndUpdate(id, newKar, { new: true }, (err, kar) => {
      if (err || !kar) return res.status(404).send(err)

      return res.json(kar)
    })
  },

  async destroy(req, res) {
    const { id } = req.params

    Kar.findByIdAndDelete(id, (err, kar) => {
      if (err || !kar) return res.status(404).send(err)

      return res.json(kar)
    })
  }
}
