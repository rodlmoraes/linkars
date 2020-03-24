const Kar = require('../models/Kar')

module.exports = {
  async index(req, res) {
    const { q } = req.query

    const searchRegex = new RegExp(q);
    const kars = await Kar.find({
      $or: [
        {
          vehicle: {
            $regex: searchRegex, $options: 'i'
          }
        },
        {
          brand: {
            $regex: searchRegex, $options: 'i'
          }
        }
      ]
    })

    return res.json(kars)
  }
}
