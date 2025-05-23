function validateIP(ip) {
  const regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return regex.test(ip);
}

function validatePort(port) {
  const n = Number(port);
  return Number.isInteger(n) && n > 0 && n < 65536;
}

module.exports = { validateIP, validatePort };
