#!/usr/bin/env node

const generateShell = require('../lib/generate');

const [,, ip, port, type] = process.argv;

if (!ip || !port || !type) {
  console.log('Usage: revshellgen <ip> <port> <type>');
  process.exit(1);
}

const shell = generateShell(ip, port, type.toLowerCase());

if (!shell) {
  console.log('Unsupported shell type:', type);
  process.exit(1);
}

console.log(shell);
