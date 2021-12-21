const jwt = require('jsonwebtoken')
const axios = require('axios')
const { response } = require('express')

const login = (req, res, next) => {
  console.log(req.body)
  const datosLogin = req.body

  axios.get(`http://localhost:3000/users?email=${datosLogin.email}`)
    .then(resp => {
      const usuarios = resp.data
      if (usuarios.length === 0) {
        // No existe el usuario con ese email
        return res.status(401).json({msg: 'Los datos del login son incorrectos'})

      } else {
        const [ usuario ] = usuarios
        if (usuario.password === datosLogin.password) {
          // Devolver el token
          const token = jwt.sign({
            id: usuario.id,
            nombre: usuario.nombre,
            rol: usuario.rol,
            lang: 'es',
            theme: 'dark'
          }, 'PALABRA_SECRETA')

          return res.json({token})

        } else {
          // Los datos son erroneos
          res.status(401)
          return res.json({msg: 'Los datos del login son incorrectos'})
        }

      }
    })
}

const signup = (req, res = response, next) => {
  const datosRegistro = req.body
  datosRegistro.rol = 'USER'

  axios.get(`http://localhost:3000/users?email=${datosRegistro.email}`)
    .then(resp => {
      const usuarios = resp.data
      if (usuarios.length === 0) {
        res.status(201)
        return axios.post('http://localhost:3000/users', datosRegistro)
          // .then(resp => {
          //   console.log(resp.data)
          //   return res.json({data: resp.data})
          // })
      } else {
        res.status(409)
        return Promise.resolve({data: {msg: 'Ya existe un usuario registrado con ese email'}})
      }
    })
    .then(resp => {
      // console.log({resp})
      return res.json(resp.data)
    })

}

module.exports = {
  login,
  signup
}