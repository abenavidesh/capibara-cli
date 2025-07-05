import { EditorOptions } from '../types'

const { Command } = require('commander')
const fetch = require('node-fetch')
const fs = require('fs')
const os = require('os')
const path = require('path')
const { getEditor, openEditor } = require('../utils/editor.js')

const editJsonCommand = new Command('edit-json')
  .description(
    'Obtiene un Pokémon, abre su JSON para editarlo y muestra los cambios'
  )
  .argument('<nombre>', 'Nombre o ID del Pokémon')
  .option('-e, --editor <editor>', 'Editor para abrir el archivo')
  .action(async (nombre: string, options: EditorOptions) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
      )
      const data = await res.json()

      const tempPath = path.join(os.tmpdir(), `pokemon-${nombre}.json`)
      fs.writeFileSync(tempPath, JSON.stringify(data, null, 2))
      console.log(`📝 Archivo creado en: ${tempPath}`)

      const editor = await getEditor(options.editor)
      await openEditor(editor, tempPath)

      try {
        const edited = fs.readFileSync(tempPath, 'utf8')
        const parsed = JSON.parse(edited)
        console.log(
          '✅ Archivo modificado exitosamente. Contenido actualizado:'
        )
        console.log(JSON.stringify(parsed, null, 2))
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error:', err.message)
        } else {
          console.error('Error desconocido:', err)
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('❌ No se pudo obtener el Pokémon:', err.message)
      } else {
        console.error('Error desconocido:', err)
      }
    }
  })

export { editJsonCommand }
