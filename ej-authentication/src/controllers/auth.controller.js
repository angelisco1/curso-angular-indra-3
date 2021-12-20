const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
  console.log(req.body)

  const usuario = {
    nombre: 'Charles Falco',
    username: 'cfalco',
    password: '1234',
    email: 'cfalco@gmail.com',
    rol: 'USER'
  }

  const token = jwt.sign({
    username: usuario.username,
    nombre: usuario.nombre,
    rol: usuario.rol,
    lang: 'es',
    theme: 'dark'
  }, 'PALABRA_SECRETA')

  return res.json({token})
}

const signup = (req, res, next) => {
  return res.json({msg: 'Te has registrado correctamente'})
}

module.exports = {
  login,
  signup
}