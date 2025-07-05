export interface PromptQuestion {
  name: string
  message: string
  type: 'input' | 'confirm' | 'list' | 'password'
  validate?: (input: string) => boolean | string
  default?: string | boolean
  choices?: string[]
}
