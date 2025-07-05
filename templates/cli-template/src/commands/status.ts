const { Command } = require('commander')
const fetch = require('node-fetch')

const statusCommand = new Command('status')
  .description('Verifica el estado general de la API de Pokémon')
  .action(async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/')
      const data = await res.json()
      console.log('✔️ Estado de la API OK')
      console.table(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('❌ Error al conectar con la API:', err.message)
      } else {
        console.error('Error desconocido:', err)
      }
    }
  })

export { statusCommand }
