const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html>');
  res.write('<head><title>Biodata Saya</title></head>');
  res.write('<body>');
  res.write('<h1>Biodata</h1>');
  res.write('<ul>');
  res.write('<li>Nama: Sultan Yusuf Albari</li>');
  res.write('<li>Tempat Lahir: Bogor</li>');
  res.write('<li>Tanggal lahir: 09 September 2002</li>');
  res.write('<li>Alamat: Kp. Babakan Indah No 58</li>');
  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(2500, () => {
  console.log('Server berjalan di http://localhost:2500/');
});
