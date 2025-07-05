const fs = require('fs')
const { execSync } = require('child_process')

// Crear carpeta 'release' si no existe
if (!fs.existsSync('release')) {
  fs.mkdirSync('release', { recursive: true })
}

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const name = pkg.name || 'cli'

// Entrada principal del proyecto (ajusta si es necesario)
const entry = 'dist/src/cli.js'

// Plataformas de destino
const targets = [
  { os: 'win', ext: '.exe' },
  { os: 'mac', ext: '' },
  { os: 'linux', ext: '' },
]

for (const { os, ext } of targets) {
  const outDir = `release/${os}`
  const outPath = `${outDir}/${name}${ext}`
  const target = `node18-${os}-x64`

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  console.log(`🔧 Generando binario para ${os}...`)
  execSync(`pkg ${entry} --targets ${target} --output ${outPath}`, {
    stdio: 'inherit',
  })
}
