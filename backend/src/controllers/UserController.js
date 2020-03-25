const User = require('../models/User')

module.exports = {
  async login(req, res) {
    const { email, password } = req.body
    User.find({ email, password }, (err, user) => {
      if (err || !user) return res.status(404).send(err)

      return res.json(user)
    })
  },

  async register(req, res) {
    const { email, password } = req.body

    user = await User.create({
      email, password
    })

    return res.json(user)
  },
}
