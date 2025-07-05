#!/usr/bin/env node

const { Command } = require('commander')
const { registerCommand } = require('./commands/register')
const { editJsonCommand } = require('./commands/editJson')
const { statusCommand } = require('./commands/status')

const program = new Command()

program
  .name('capibara')
  .description('CLI de ejemplo con inputs, editor externo y API')
  .version('1.0.0')

program.addCommand(registerCommand)
program.addCommand(editJsonCommand)
program.addCommand(statusCommand)

program.parse()
