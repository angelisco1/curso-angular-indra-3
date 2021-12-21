const router = require('express').Router()
const AuthController = require('./controllers/auth.controller')
const NoticiasController = require('./controllers/noticias.controller')
const { isTokenValid } = require('./utils/middlewares')


router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)

// router.use(isTokenValid)
router.get('/noticias', NoticiasController.getNoticias)

router.post('/noticias', isTokenValid, NoticiasController.createNoticia)

module.exports = router