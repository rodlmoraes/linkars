const { Router } = require('express')
const KarController = require('./controllers/KarController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/kars', KarController.index)
routes.get('/kars/:id', KarController.show)
routes.post('/kars', KarController.store)
routes.put('/kars/:id', KarController.update)
routes.patch('/kars/:id', KarController.save)
routes.delete('/kars/:id', KarController.destroy)

routes.get('/search', SearchController.index)

module.exports = routes
