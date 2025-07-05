export type SupportedEditor =
  | 'notepad'
  | 'nano'
  | 'code'
  | 'cursor'
  | 'code-insiders'
  | 'code-exploration'
  | string

export interface EditorOptions {
  editor?: SupportedEditor
}
