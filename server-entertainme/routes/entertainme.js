const router = require('express').Router()
const Controller = require('../controllers/entertainmeController')

router.get('/', Controller.findAll)
router.get('/movies/:id',Controller.findAll)
router.get('/tvs/:id',Controller.findAll)
router.get('/tvs',Controller.findAll)
router.get('/movies',Controller.findAll)
router.post('/movies', Controller.createDataMovie)
router.post('/tvs', Controller.createDataTv)
router.delete('/movies/:id', Controller.deleteDataMovie)
router.delete('/tvs/:id', Controller.deleteDataTv)
router.patch('/movies/:id', Controller.editDataMovie)
router.patch('/tvs/:id', Controller.editDataTv)

module.exports = router