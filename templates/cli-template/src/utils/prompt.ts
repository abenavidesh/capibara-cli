const inquirer = require('inquirer')

export async function askInput(
  message: string,
  validate?: (input: string) => boolean | string
): Promise<string> {
  const { input } = await inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message,
      validate,
    },
  ])
  return input
}

export async function askPassword(message: string): Promise<string> {
  const { password } = await inquirer.prompt([
    {
      type: 'password',
      name: 'password',
      message,
      mask: '*',
      validate: (input: string): boolean | string =>
        input.length >= 6
          ? true
          : 'La contraseña debe tener al menos 6 caracteres',
    },
  ])
  return password
}

export async function askList(
  message: string,
  choices: string[]
): Promise<string> {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message,
      choices,
    },
  ])
  return choice
}

export async function askConfirm(
  message: string,
  defaultValue = false
): Promise<boolean> {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message,
      default: defaultValue,
    },
  ])
  return confirm
}
