const bash = require('../payloads/bash');
const python = require('../payloads/python');
const netcat = require('../payloads/netcat');
const php = require('../payloads/php');
const powershell = require('../payloads/powershell');
const { validateIP, validatePort } = require('./validate');

function generateShell(ip, port, type) {
  if (!validateIP(ip)) {
    console.error('Invalid IP');
    return null;
  }
  if (!validatePort(port)) {
    console.error('Invalid Port');
    return null;
  }

  switch(type) {
    case 'bash': return bash(ip, port);
    case 'python': return python(ip, port);
    case 'netcat': return netcat(ip, port);
    case 'php': return php(ip, port);
    case 'powershell': return powershell(ip, port);
    default: return null;
  }
}

module.exports = generateShell;
