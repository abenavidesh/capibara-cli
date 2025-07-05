#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'

const program = new Command()

program
  .name('capibara')
  .description('CLI para crear nuevos proyectos CLI con plantilla base')
  .version('1.0.0')

program
  .command('create <project-name>')
  .description('Crea un nuevo proyecto CLI con nombre dado')
  .option(
    '-t, --type <type>',
    'Tipo de proyecto a crear (CLI, React, Electron, etc.)'
  )
  .action(async (projectName: string, options: { type: string }) => {
    try {
      if (options.type === 'CLI') {
        const targetDir = path.resolve(process.cwd(), projectName)
        const templateDir = path.resolve(__dirname, '../templates/cli-template')

        if (fs.existsSync(targetDir)) {
          console.error(
            `❌ La carpeta ${projectName} ya existe. Elige otro nombre o elimina la carpeta.`
          )
          process.exit(1)
        }

        await fs.copy(templateDir, targetDir)
        console.log(`✅ Proyecto CLI '${projectName}' creado en: ${targetDir}`)
        console.log('🚀 Para iniciar:')
        console.log(`  cd ${projectName}`)
        console.log('  npm install')
        console.log('  npm run build')
        console.log('  node ./dist/index.js --help')
      } else {
        console.error('❌ El tipo de proyecto especificado no es válido.')
      }
    } catch (error) {
      console.error('❌ Error creando proyecto:', error)
    }
  })

program.parse(process.argv)
