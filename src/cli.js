#!/usr/bin/env node

const meow = require('meow');
const eiogao = require('./index')

const cliMode = async () => {
  while(true) await eiogao()
}

cliMode(meow({}))
