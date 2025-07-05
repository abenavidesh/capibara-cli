const { Command } = require('commander')
const {
  askInput,
  askPassword,
  askList,
  askConfirm,
} = require('../utils/prompt.js')

const registerCommand = new Command('register')
  .description('Registrar un nuevo usuario con inputs interactivos')
  .action(async () => {
    const username = await askInput(
      'Nombre de usuario:',
      (input: string): boolean | string =>
        input.length > 0 || 'Debe ingresar un nombre válido'
    )
    const password = await askPassword('Contraseña:')
    const role = await askList('Seleccione un rol:', ['Admin', 'User', 'Guest'])
    const subscribe = await askConfirm('¿Desea suscribirse al boletín?')

    console.log('Datos del usuario:', { username, password, role, subscribe })
    // Aquí lógica para guardar usuario
  })

export { registerCommand }
