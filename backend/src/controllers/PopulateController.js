const axios = require('axios')
const Kar = require('../models/Kar')

module.exports = {
  async populateFipe(req, res) {
    const brands = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')

    for (const brand of brands.data) {
      const modelos = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + brand.codigo + '/modelos')
      for (const vehicle of modelos.data.modelos) {
        const anos = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + brand.codigo + '/modelos/' + vehicle.codigo + '/anos')
        for (const year of anos.data) {
          kar = await Kar.create({
            vehicle: vehicle.nome.split(' ')[0],
            brand: brand.nome,
            year: year.nome.split(' ')[0],
            description: vehicle.nome.split(' ').slice(1).join(' ')
          })
        }
      }
    }

    return res.json({ created: true })
  },
}
