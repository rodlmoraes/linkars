const { Router } = require('express')
const KarController = require('./controllers/KarController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', KarController.index)
routes.get('/devs/:id', KarController.show)
routes.post('/devs', KarController.store)
routes.put('/devs/:id', KarController.update)
routes.delete('/devs/:id', KarController.destroy)

routes.get('/search', SearchController.index)

module.exports = routes
