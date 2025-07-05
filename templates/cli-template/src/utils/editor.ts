const { spawn } = require('child_process')

function isCommandAvailable(cmd: string): Promise<boolean> {
  return new Promise((resolve) => {
    const child = spawn(cmd, ['--version'], { stdio: 'ignore', shell: true })
    child.on('error', () => resolve(false))
    child.on('exit', (code: number) => resolve(code === 0))
  })
}

async function findCodeEditor(): Promise<string | null> {
  const candidates = ['cursor', 'code', 'code-insiders', 'code-exploration']
  for (const cmd of candidates) {
    if (await isCommandAvailable(cmd)) return cmd
  }
  return null
}

export async function getEditor(preferredEditor?: string): Promise<string> {
  let editor = preferredEditor
  if (editor && !(await isCommandAvailable(editor))) {
    console.warn(
      `⚠️  Editor '${editor}' no encontrado en PATH, usando fallback.`
    )
    editor = undefined
  }
  if (!editor) {
    editor =
      (await findCodeEditor()) ||
      process.env.EDITOR ||
      (process.platform === 'win32' ? 'notepad' : 'nano')
  }
  return editor
}

export function openEditor(editor: string, filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const args = [
      'cursor',
      'code',
      'code-insiders',
      'code-exploration',
    ].includes(editor.toLowerCase())
      ? ['--wait', filePath]
      : [filePath]

    const child = spawn(editor, args, { stdio: 'inherit', shell: true })

    child.on('error', (err: Error) => reject(err))
    child.on('exit', () => resolve())
  })
}
