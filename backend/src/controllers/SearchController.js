const Kar = require('../models/Kar')

module.exports = {
  async index(req, res) {
    const { q } = req.query

    const vehicleRegex = new RegExp(q);
    const kars = await Kar.find({
      'vehicle': {
        $regex: vehicleRegex, options: 'i'
      }
    })

    return res.json(kars)
  }
}
