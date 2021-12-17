// THIS

function a() {
  console.log(this)
}

a()

const persona = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function() {
    console.log(this)

    const b = function() {
      console.log('Dentro de la b', this)
    }

    b()
  }
}

persona.getNombreCompleto()

// SOLUCIÓN 1 - Patrón self/that
const persona1 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function() {
    console.log(this)
    let that = this

    const b = function() {
      console.log('Dentro de la b', that)
    }

    b()
  }
}

persona1.getNombreCompleto()

// SOLUCIÓN 2 - bind
const persona2 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function() {
    console.log(this) // persona

    let b = function() {
      console.log('Dentro de la b', this)
    }

    b = b.bind(this) // persona
    b()
  }
}

persona2.getNombreCompleto()

// SOLUCIÓN 3 - apply y call (las dos funciones hacen lo mismo, la diferencia está en como se le pasan los parámetros)
const persona3 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function() {
    console.log(this) // persona

    let b = function() {
      console.log('Dentro de la b', this)
    }

    b.apply(this)
    b.call(this)
  }
}

persona3.getNombreCompleto()

// SOLUCIÓN 4 - arrow function
const persona4 = {
  nombre: 'Charles',
  apellidos: 'Falco',
  getNombreCompleto: function() {
    console.log(this) // persona

    let b = () => {
      console.log('Dentro de la b', this)
    }

    b()
  }
}

persona4.getNombreCompleto()